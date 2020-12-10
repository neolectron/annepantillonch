import { getPostList, getPostBySlug } from '../../lib/ghost';

import Layout from '../../components/Layout/Layout';

const Post = ({ postData }) => (
  <Layout column title={`Anne Pantillon - ${postData.title}`}>
    <p>{postData.plaintext}</p>
  </Layout>
);

// Return a list of possible value for slug
export async function getStaticPaths() {

  const postList = await getPostList();
  
  console.log(postList
    .filter(item => item.slug) // filter-out Pagination data
    .map(item => ({ params: {slug: item.slug} })))

  return {
    paths: postList
      .filter(item => item.slug) // filter-out Pagination data
      .map(item => ({ params: { slug: item.slug } }) ),
    fallback: false
  }
}

// Fetch necessary data for the blog post using params.slug
export async function getStaticProps({ params }) {

  const post = await getPostBySlug(params.slug);

  return {
    props: {
      postData : {
        ...post,
      }
    }
  }

}

export default Post;