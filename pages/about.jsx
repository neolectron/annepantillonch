import { getPageBySlug } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Accordion from '../components/Accordion/Accordion.jsx';

const AboutPage = ({ cv, parcours }) => (
  <Layout title="a propos">
    <Header backTo="/" backText="Accueil" />

    <div className="md:px-10 flex justify-center px-2">
      <div className="w-full max-w-3xl">
        <Accordion names={['Mon Parcours', 'CV']}>
          <Article
            html={parcours.html}
            className="md:col-start-3 md:col-span-3"
          />
          <Article html={cv.html} className="md:col-start-3 md:col-span-3" />
        </Accordion>
      </div>
    </div>

    <Footer backTop />
  </Layout>
);

export default AboutPage;
// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  // const about = await getPageBySlug('a-propos');
  const cv = await getPageBySlug('cv');
  const parcours = await getPageBySlug('parcours');

  return { props: { cv, parcours } };
}
