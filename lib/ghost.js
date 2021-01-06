import GhostContentAPI from "@tryghost/content-api";
import { parse } from 'node-html-parser';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'f2b976aec391b60916225427d7',
  version: "v3"
});

const getPostList = () => api.posts
  .browse({ limit: "all", fields: ['slug','id','tags']})
  .catch(err => console.error(err));

const getPostListByTags = (tags) => api.posts
  .browse({ limit: "all", include: ['tags', 'plaintext', 'authors'], filter: `tags:[${tags}]`, formats: ['html', 'plaintext'] })
  .catch(err => console.error(err));

const getPostBySlug = (slug) => api.posts
  .read({ slug }, { include: ['tags', 'plaintext', 'authors'], formats: ['html', 'plaintext'] })
  .catch(err => console.error(err));

const getPageList = () => api.pages
  .browse({ limit: "all" })
  .catch(err => console.error(err));

const getTagList = () => api.tags
  .browse({ limit: "all" })
  .catch(err => console.error(err));

const getLastImageForTag = (tag) => api.posts
  .browse({ limit: 1, filter: `tags:[${tag}]`})
  .then(async ([post]) => post.feature_image || parse(post.html).querySelector('img').getAttribute('src'))
  .catch(err => console.error(err));

export { api as default, getPostList, getPostBySlug, getPostListByTags, getPageList, getTagList, getLastImageForTag };