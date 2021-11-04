import GhostContentAPI, { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { parse } from 'node-html-parser';

export type PostOrPageImages = {
  src: string;
  alt?: string;
  caption?: string;
};

export type PostOrPageExtended = PostOrPage & {
  imgs: PostOrPageImages[];
};

// Ensure Ghost API is available
if (!process.env['GHOST_CONTENT_API_URL'] || !process.env['GHOST_CONTENT_API_KEY']) {
  throw new Error('Ghost Content API url or key not set');
}

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env['GHOST_CONTENT_API_URL'],
  key: process.env['GHOST_CONTENT_API_KEY'],
  version: 'v3',
});

// Commons functions and decorators
const errorHandler = (e: string) => console.error(e);

const getPostImages = ({ html }: PostOrPage): PostOrPageImages[] => {
  if (!html) return [];

  const figures = parse(html).querySelectorAll('figure');

  return Array.from(figures).map((fig) => {
    const { src, alt } = fig.querySelector('img') as unknown as HTMLImageElement;
    const caption = fig.querySelector('figcaption');

    return { src, alt, caption: caption?.innerText || '' };
  });
};

const decoratePost = (post: PostOrPage): PostOrPageExtended => ({
  ...post,
  imgs: getPostImages(post),
});

const sortByExcerpt = (list: PostOrPage[]) =>
  [...list].sort(({ custom_excerpt: a }, { custom_excerpt: b }) => {
    if (!a) return 1;
    if (!b) return 0;
    return parseInt(a) - parseInt(b);
  });

// Exported Api functions
const getPostList = () =>
  api.posts
    .browse({ limit: 'all', fields: ['slug', 'id'] })
    .then((list) => list.map(decoratePost))
    .then(sortByExcerpt)
    .catch(errorHandler);

const getPostListByTags = (tags: string) =>
  api.posts
    .browse({ limit: 'all', include: ['tags'], filter: `tags:[${tags}]`, formats: ['html'] })
    .then((list) => list.map(decoratePost))
    .then(sortByExcerpt)
    .catch(errorHandler);

const getPostBySlug = (slug: string) =>
  api.posts
    .read({ slug }, { include: ['tags'], formats: ['html'] })
    .then((post) => decoratePost(post))
    .catch(errorHandler);

const getPostListFeatured = () => api.posts.browse({ limit: 'all', filter: 'featured:true', formats: ['html'] });
const getPageList = () => api.pages.browse({ limit: 'all' }).then(sortByExcerpt).catch(errorHandler);

const getPageBySlug = (slug: string) =>
  api.pages
    .read({ slug })
    .then((post) => decoratePost(post))
    .catch(() => {}); // silence errors because sometime 404 is intended

const getTagList = () => api.tags.browse({ limit: 'all' }).catch(errorHandler);

const findImageForPage = (pageSlug: string): Promise<string> =>
  api.posts
    .browse({ limit: 'all', filter: `tags:[${pageSlug}]` })
    .then((list) => list.map(decoratePost))
    .then(
      (posts) =>
        posts.find((post) => post.feature_image)?.feature_image ||
        posts.find(({ imgs }) => imgs.length > 0)?.imgs[0]?.src ||
        ''
    );

export {
  api as default,
  getPostList,
  getPostListByTags,
  getPostBySlug,
  getPostListFeatured,
  getPageList,
  getPageBySlug,
  findImageForPage,
  getTagList,
};
