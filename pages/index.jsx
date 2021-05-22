import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header.jsx';
import { a, config, useSpring } from 'react-spring';
import { getPageBySlug, getPostListFeatured } from '../lib/ghost.js';
import Link from 'next/link';

export default function Home({ news }) {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 600,
    config: config.molasses,
  });

  return (
    <Layout>
      <div className="pb-4 text-white bg-cover bg-anne">
        <Header backText="ANNE PANTILLON" goText="TRAVAUX" goTo="/works" reversedIcon={true} />
        <div className="grid content-center flex-grow grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col justify-center col-span-2 col-start-2 px-2 col-span md:px-10">
            <a.h1 style={props} className="text-5xl text-center text-white md:text-8xl">
              Actualités
            </a.h1>

            {news && (
              <div className="grid grid-cols-1 md:grid-cols-4">
                <Link /*href={`/posts/${news.slug}`}*/ href="/news">
                  <a className="block col-span-2 col-start-2 p-4 pt-3 text-white bg-black shadow-xl bg-opacity-30">
                    <Article html={news.html} />
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Fetch necessary data for the current page
export async function getStaticProps() {
  const page = await getPageBySlug('accueil');
  const [news] = await getPostListFeatured();

  return {
    props: {
      page: page || { imgs: [{ src: '/technique.png' }] },
      news: news || null,
    },
  };
}
