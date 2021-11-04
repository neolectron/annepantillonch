import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import Header from '../components/Header/Header.jsx';
import { a, config, useSpring } from 'react-spring';
import { getPageBySlug, getPostListFeatured } from '../lib/ghost.js';
import Link from 'next/link';

interface HomePageProps {
  news: any;
}

export default function Home({ news }: HomePageProps) {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 600,
    config: config.molasses,
  });

  return (
    <Layout>
      <div className="bg-anne pb-4 text-white bg-cover">
        <Header backText="ANNE PANTILLON" goText="TRAVAUX" goTo="/works" reversedIcon={true} />
        <div className="md:grid-cols-3 lg:grid-cols-4 grid content-center flex-grow grid-cols-1">
          <div className="col-span md:px-10 flex flex-col justify-center col-span-2 col-start-2 px-2">
            <a.h1 style={props} className="md:text-8xl text-5xl text-center text-white">
              Actualités
            </a.h1>

            {news && (
              <div className="md:grid-cols-4 grid grid-cols-1">
                <Link /*href={`/posts/${news.slug}`}*/ href="/news">
                  <a className="bg-opacity-30 block col-span-2 col-start-2 p-4 pt-3 text-white bg-black shadow-xl">
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
    props: { page, news },
  };
}
