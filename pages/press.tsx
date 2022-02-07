import { getPageBySlug } from '../lib/ghost';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PressPage = ({ press }) => (
  <Layout title="presse">
    <Navbar backTo="/" backText="Accueil" />

    <div className="md:px-10 md:grid-cols-6 grid grid-cols-1 px-2 py-10 my-4">
      <Article html={press.html} className="md:col-start-3 md:col-span-3" />
    </div>

    <Footer backTop />
  </Layout>
);

export default PressPage;
// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  const press = await getPageBySlug('presse');
  return { props: { press } };
}
