import { getPageBySlug } from '../lib/ghost.js';
import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Button from '../components/Button/Button.jsx';
import Link from 'next/link';

export default function News({ about }) {
  return (
    <Layout title="a propos">
      <div className="flex flex-col">
        <div className="p-4">
          <Link href="/">
            <Button asAnchor icon="left" text="Accueil" />
          </Link>
        </div>
        <div className="px-2 md:px-10 py-10 my-4 grid grid-cols-1 md:grid-cols-6 alternate-bg">
          <Article html={about.html} className="md:col-start-2 md:col-span-2" />
        </div>
        <div className={`my-14 flex justify-center items-center hidden`}>
          <Button icon="up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
        </div>
      </div>
    </Layout>
  )
}

// Fetch necessary data for the blog post using tags
export async function getStaticProps() {
  const about = await getPageBySlug('a-propos');
  return { props: { about } };
}