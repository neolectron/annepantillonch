import { getPostList, getPostBySlug } from '../../lib/ghost';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import Article from '../../components/Article/Article';

import Link from 'next/link';

const Post = ({ post }) => (
  <Layout title={`Anne Pantillon - ${post.title}`}>
    <div className="mt-14 md:mt-0 md:mr-12 p-8">
      <Link href="/works">
        <a>
          <Button asAnchor icon="left.svg">
            Works
          </Button>
        </a>
      </Link>
      <div className="gap-14 flex flex-col">
        <div className="p-8">
          <Article html={post?.html} />
        </div>
      </div>
    </div>
  </Layout>
);

// Return a list of possible value for slug
export async function getStaticPaths() {
  const postList = await getPostList();

  return {
    paths: postList
      .filter((item) => item.slug) // filter-out Pagination data
      .map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.slug
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
  };
}

export default Post;
