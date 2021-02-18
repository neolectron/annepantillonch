import Layout from '../components/Layout/Layout.jsx';
import Article from '../components/Article/Article.jsx';
import { useCallback } from 'react';
import { a, config, useTrail } from 'react-spring';
import { getPageBySlug, getPostListFeatured } from '../lib/ghost.js';
import Flickity from 'react-flickity-component';
import Link from 'next/link';
import Button from '../components/Button/Button.jsx';


export default function Home({ page, news }) {

  const [[first, second]] = useTrail(2, () => ({
    from: { opacity: 0, transform: -30 },
    to: { opacity: 1, transform: 0 },
    delay: 600,
    config: config.molasses,
  }));

  const translate = useCallback(x => `translateX(${x}px)`);

  return (
    <Layout menuBgTransparent>
      <div className="z-0 pointer-events-none fixed h-screen w-screen top-0 left-0">
        <Flickity
          static
          className="h-full w-full"
          options={{
            draggable: false,
            fade: true,
            autoPlay: 7000,
            setGallerySize: false,
            prevNextButtons: false,
            pageDots: false,
            imagesLoaded: true,
          }}
        >
          {page.imgs.map((img) => (
            <div key={img.src} className="w-full h-full overflow-hidden">
              <div
                style={{ backgroundImage: `url(${img.src})` }}
                className={`w-full h-full bg-cover bg-pulse origin-right`}
              ></div>
            </div>
          ))}
        </Flickity>
      </div>

      <div className="relative z-10 flex-grow grid grid-cols-1 md:grid-cols-4 content-center">
        <a.div
          style={{
            opacity: second.opacity,
            transform: second.transform.interpolate(translate),
          }}
          className="text-2xl hidden md:block z-10 fixed top-1 left-10 py-2 text-gray-300"
        >
          ANNE PANTILLON
        </a.div>

        <Link href="/works">
          <a.a
            style={{
              opacity: second.opacity,
              transform: second.transform.interpolate(translate),
            }}
            className="hidden md:block z-10 fixed top-1 right-14 py-2 px-4 text-gray-300"
          >
            <Button reversed swaped icon="right" text="Travaux" />
          </a.a>
        </Link>

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
              <Link href={`/posts/${news.slug}`}>
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
      page: page || {imgs: [{src: '/technique.png'}]}, 
      news: news || null,
    }
  };
}