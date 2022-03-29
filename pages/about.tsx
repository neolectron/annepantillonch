import { getPageBySlug, PostOrPageExtended } from '../lib/ghost';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Accordion from '../components/Accordion/Accordion';

interface AboutProps {
  cv: PostOrPageExtended | null;
  parcours: PostOrPageExtended | null;
}

const AboutPage = ({ cv, parcours }: AboutProps) => (
  <Layout title="a propos">
    <Navbar prev={{ href: '/', name: 'ANNE PANTILLON' }} title="A PROPOS" />

    <div className="md:px-10 flex justify-center px-2">
      <div className="w-full max-w-3xl">
        {parcours && cv && (
          <Accordion names={['Mon Parcours', 'CV']}>
            <Article article={parcours} />
            <Article article={cv} />
          </Accordion>
        )}
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
