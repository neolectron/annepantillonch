import { getPostList, getPostBySlug } from '../../lib/ghost';

import Layout from '../../components/Layout/Layout.jsx';
import RichContent from '../../components/RichContent/RichContent.jsx';
import Button from '../../components/Button/Button.jsx';

const Post = ({ post }) => (
  <Layout column title={`Anne Pantillon - ${post.title}`}>
    <div className="p-8 mt-14 md:mt-0 md:mr-12">
      <Button asLink href="/" > &lt; Accueil </Button>
      <div className="flex flex-col gap-14">
        <div className="p-8"><RichContent post={post} /></div>
      </div>
    </div>
  </Layout>
);

// Return a list of possible value for slug
export async function getStaticPaths() {

  const postList = await getPostList();
  
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
    props: { post }
  }

}

export default Post;