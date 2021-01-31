import GhostContentAPI from "@tryghost/content-api";
import { parse } from 'node-html-parser';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://backoffice.jcloud-ver-jpc.ik-server.com',
  key: 'bd1cc747d173ef799ebb50d241',
  version: "v3"
});

const errorHandler = (e) => console.error(e);

const getPostImages = ({ html }) => Array.from(parse(html).querySelectorAll('figure'))
  .map(fig => ({
      ...fig.querySelector('img')?.attributes,
      caption: fig.querySelector('figcaption')?.innerText || null,
  }));

const getPostDescription = ({html}) => parse(html)
  .querySelector('p')?.innerText || null;

const decoratePost = (post) => ({
  ...post,
  imgs: getPostImages(post),
  description: getPostDescription(post),
});

const getPostList = () => api.posts
  .browse({ limit: "all", fields: ['slug', 'id']})
  .then(async (list) => list.map(decoratePost))
  .catch(errorHandler);

const getPostListByTags = (tags) => api.posts
  .browse({ limit: "all", include: ['tags', 'plaintext', 'authors'], filter: `tags:[${tags}]`, formats: ['html', 'plaintext'] })
  .then(async (list) => list.map(decoratePost))
  .catch(errorHandler);

const getPostBySlug = (slug) => api.posts
  .read({ slug }, { include: ['tags', 'plaintext', 'authors'], formats: ['html', 'plaintext'] })
  .then(async (post) => decoratePost(post))
  .catch(errorHandler);

const getPageList = () => api.pages
  .browse({ limit: "all" })
  .catch(errorHandler);

const getPageByTag = (tag) => api.pages
  .read({ slug: tag }, { include: ['html', 'plaintext'], formats: ['html', 'plaintext'] })
  .catch(errorHandler);

const getTagList = () => api.tags
  .browse({ limit: "all" })
  .catch(errorHandler);

const getLastImageForTag = (tag) => api.posts
  .browse({ limit: "all", filter: `tags:[${tag}]`})
  .then(async (list) => list.map(decoratePost))
  .then(async (posts) => {
    return (
      posts.reduce((acc, post) => acc || post.feature_image, null)
      || posts.reduce((acc, post) => acc || post.imgs[0].src, null)
    );
  })
  .catch(errorHandler);

export { api as default, getPostList, getPostBySlug, getPostListByTags, getPageList, getPageByTag, getTagList, getLastImageForTag };