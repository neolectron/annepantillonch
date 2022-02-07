import { getPageBySlug } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AboutPage = ({ about }) => (
  <Layout title="a propos">
    <Navbar backTo="/" backText="Accueil" />

    <div className="md:px-10 md:grid-cols-6 grid grid-cols-1 px-2">
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
