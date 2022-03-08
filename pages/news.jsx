import { getPostListByTags } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const NewsPage = ({ news }) => (
  <Layout title={'news'}>
    <Header backTo="/" backText="ACCUEIL" />
    {news?.map((article) => (
      <>
        <div
          className="md:px-10 max-w-3xl px-2 py-10 my-4 ml-32"
          key={article.id}
        >
          <h1 className="mb-6 text-3xl">{article.title}</h1>
          <Article html={article.html} className={'w-full'} />
        </div>
        <hr className="mx-20 border-b border-gray-600" />
      </>
    ))}
  </Layout>
);

export default NewsPage;
// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  const news = await getPostListByTags('news');
  return { props: { news } };
}
