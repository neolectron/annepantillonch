import { getPostListByTags } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Button from '../components/Button/Button.jsx';
import Link from 'next/link';

export default function News({ news }) {
  return (
    <Layout title="news">
      <div className="p-8">
        <Link href="/works">
          <a>
            <Button asAnchor icon="left">Works</Button>
          </a>
        </Link>
        {news?.map((n) => 
          <Link key={n.slug} href={`/posts/${n.slug}`}>
            <a className={`block p-8 border border-gray-400 w-max bg-white rounded-sm`}>
              <Article html={n.html} />
            </a>
          </Link>
        )}
      </div>
    </Layout>
  )
}

// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  const news = await getPostListByTags('news');
  return {props: {news}}
}