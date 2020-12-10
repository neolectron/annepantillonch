import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'f2b976aec391b60916225427d7',
  version: "v3"
});

const getPostList = () => api.posts
  .browse({ limit: "all", fields: ['slug','id'] })
  .catch(err => console.error(err));

const getPostBySlug = (slug) => api.posts
  .read({ slug }, { formats: ['html', 'plaintext'] })
  .catch(err => console.error(err));

export { api as default, getPostList, getPostBySlug };