import GhostContentAPI from "@tryghost/content-api";
import { parse } from 'node-html-parser';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_CONTENT_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3"
});

// Commons functions and decorators
const errorHandler = (e) => console.error(e);

const getPostImages = ({ html }) => Array.from(parse(html).querySelectorAll('figure'))
  .map(fig => ({
    ...fig.querySelector('img')?.attributes,
    caption: fig.querySelector('figcaption')?.innerText || null,
  }));

const decoratePost = (post) => ({
  ...post,
  imgs: getPostImages(post)
});

const sortByExcerpt = async (list) => list
  .sort(({ custom_excerpt: a }, { custom_excerpt: b }) => {
    if (!a) return 1;
    if (!b) return 0;
    return (a - b);
  })

// Exported Api functions
const getPostList = () => api.posts
  .browse({ limit: "all", fields: ['slug', 'id']})
  .then(async (list) => list.map(decoratePost))
  .then(sortByExcerpt)
  .catch(errorHandler);

const getPostListByTags = (tags) => api.posts
  .browse({ limit: "all", include: ['tags'], filter: `tags:[${tags}]`, formats: ['html'] })
  .then(async (list) => list.map(decoratePost))
  .then(sortByExcerpt)
  .catch(errorHandler);

const getPostBySlug = (slug) => api.posts
  .read({ slug }, { include: ['tags'], formats: ['html'] })
  .then(async (post) => decoratePost(post))
  .catch(errorHandler);

const getPostListFeatured = () => api.posts
  .browse({ limit: "all", filter: 'featured:true', formats: ['html']})

const getPageList = () => api.pages
  .browse({ limit: "all" })
  .then(sortByExcerpt)
  .catch(errorHandler);

const getPageBySlug = (slug) => api.pages
  .read({ slug })
  .then(async (post) => decoratePost(post))
  .catch(() => {}); // silence errors because sometime 404 is intended

const getTagList = () => api.tags
  .browse({ limit: "all" })
  .catch(errorHandler);

const findImageForPage = (pageSlug) => api.posts
  .browse({ limit: "all", filter: `tags:[${pageSlug}]` })
  .then(async (list) => list.map(decoratePost))
  .then(async (posts) => (
      posts.reduce((acc, post) => acc || post.feature_image, null)
      || posts.reduce((acc, post) => acc || post.imgs[0].src, null)
  ));

export { api as default, 
  getPostList,
  getPostListByTags,
  getPostBySlug,
  getPostListFeatured,
  getPageList,
  getPageBySlug,
  findImageForPage,
  getTagList,
};