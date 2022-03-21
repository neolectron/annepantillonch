import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import { a, config, useSpring } from 'react-spring';
import { getPageBySlug, getPostListFeatured, PostOrPageExtended } from '../lib/ghost';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';

interface HomePageProps {
  news: PostOrPageExtended;
  homePage: PostOrPageExtended;
}

export default function Home({ news, homePage }: HomePageProps) {
  const props = useSpring({
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0 },
    delay: 600,
    config: config.molasses,
  });

  return (
    <Layout>
      <div className="bg-anne pb-4 text-white bg-black bg-cover">
        <Navbar prev={{ href: '/', name: 'ANNE PANTILLON' }} next={{ href: '/works', name: 'TRAVAUX' }} />
        <div className="md:grid-cols-3 lg:grid-cols-4 grid content-center flex-grow grid-cols-1">
          <div className="col-span md:px-10 flex flex-col justify-center col-span-2 col-start-2 px-2">
            <a.h1 style={props} className="md:text-8xl text-5xl text-center text-white">
              Actualités
            </a.h1>

            {news && (
              <div className="md:grid-cols-4 grid grid-cols-1">
                <Link /*href={`/posts/${news.slug}`}*/ href="/news">
                  <a className="bg-opacity-30 block col-span-2 col-start-2 p-4 pt-3 text-white bg-black shadow-xl">
                    <Article article={news} />
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
  const homePage = (await getPageBySlug('accueil')) || null;
  const [news] = await getPostListFeatured();

  // "homePage" will be used to cycle through background images

  return {
    props: { homePage, news },
  };
}
