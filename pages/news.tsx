import { getPostListByTags } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const NewsPage = ({ news }) => (
  <Layout title={'news'}>
    <Header backTo="/" backText="ACCUEIL" />
    {news?.map((article) => (
      <div className="grid grid-cols-1 px-2 py-10 my-4 md:px-10 md:grid-cols-3 alternate-bg">
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
