import { getPostListByTags } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';

const NewsPage = ({ news }) => (
  <Layout title={'news'}>
    {news?.map((article) => (
      <div className="md:px-10 md:grid-cols-3 alternate-bg grid grid-cols-1 px-2 py-10 my-4">
        <Article html={article.html} className="md:col-start-2" />
      </div>
    ))}
  </Layout>
);

export default NewsPage;
// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  const news = await getPostListByTags('news');
  return { props: { news } };
}
