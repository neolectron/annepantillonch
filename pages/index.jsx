import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header.jsx';
import { useCallback } from 'react';
import { a, config, useTrail } from 'react-spring';
import { getPageBySlug, getPostListFeatured } from '../lib/ghost.js';
import Link from 'next/link';

export default function Home({ page, news }) {
  const [[first, second]] = useTrail(2, () => ({
    from: { opacity: 0, transform: -30 },
    to: { opacity: 1, transform: 0 },
    delay: 600,
    config: config.molasses,
  }));

  const translate = useCallback((x) => `translateX(${x}px)`);

  return (
    <Layout className="bg-anne bg-cover text-white">
      <Header backText="ANNE PANTILLON" goText="TRAVAUX" goTo="/works" />
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 content-center">
        <div className="px-2 col-span md:px-10 col-span-2 flex flex-col justify-center col-start-2">
          <a.h1
            style={{
              opacity: first.opacity,
              transform: first.transform.interpolate(translate),
            }}
            className="text-center text-5xl md:text-8xl text-white"
          >
            Actualités
          </a.h1>

          {news && (
            <div className="grid grid-cols-1 md:grid-cols-4">
              <Link /*href={`/posts/${news.slug}`}*/ href="/news">
                <a className="col-start-2 col-span-2 p-4 pt-3 block shadow-xl bg-black bg-opacity-30 text-white">
                  <Article html={news.html} />
                </a>
              </Link>
            </div>
          )}
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
