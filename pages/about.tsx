import { getPageBySlug } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const AboutPage = ({ about }) => (
  <Layout title="a propos">
    <Header backTo="/" backText="Accueil" />

    <div className="grid grid-cols-1 px-2 md:px-10 md:grid-cols-6">
      <Article html={about.html} className="md:col-start-3 md:col-span-3" />
    </div>

    <Footer backTop />
  </Layout>
);

export default AboutPage;
// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  const about = await getPageBySlug('a-propos');
  return { props: { about } };
}
