import Layout from '../components/Layout/Layout.jsx';
import RichContent from '../components/RichContent/RichContent.jsx';
import { useCallback } from 'react';
import { a, config, useTrail } from 'react-spring';
import { getPageBySlug, getPostListFeatured } from '../lib/ghost.js';
import Flickity from 'react-flickity-component';
import Link from 'next/link';


export default function Home({ page, news }) {

  const [[first, second]] = useTrail(2, () => ({
    from: { opacity: 0, transform: -30 },
    to: { opacity: 1, transform: 0 },
    delay: 600,
    config: config.molasses,
  }));

  const translate = useCallback(x => `translateX(${x}px)`);

  return (
    <Layout menuBgTransparent >

      <div className="z-0 pointer-events-none fixed h-screen w-screen top-0 left-0">
        <Flickity static className="h-full w-full"
        options={{
          draggable: false,
          fade: true,
          autoPlay: 7000,
          setGallerySize: false,
          prevNextButtons: false,
          pageDots: false,
          imagesLoaded: true,
        }}>
          {page.imgs.map((img) => 
            <div key={img.src} className="w-full h-full overflow-hidden">
              <div style={{ backgroundImage: `url(${img.src})` }}
                className={`w-full h-full bg-cover bg-pulse origin-right`}>
              </div>
            </div>
          )}
        </Flickity>
      </div>

      <div className="relative z-10 px-2 md:px-10 flex-grow flex flex-col justify-center items-start text-white">
        <a.h1 style={{ marginTop: '25%', opacity: first.opacity, transform: first.transform.interpolate(translate) }}
          className="opacity-0 text-5xl md:text-8xl font-bold px-4 border-b border-opacity-30 border-white">
          Anne Pantillon
        </a.h1>
        <a.h2 style={{ opacity: second.opacity, transform: second.transform.interpolate(translate) }}
          className="opacity-0 text-2xl text-gray-300 shadow-xl px-4">
          Artiste Plasticienne 
        </a.h2>

        {news && <Link href={`/posts/${news.slug}`} >
          <a className={`p-4 my-14 w-full md:w-4/12 border border-white bg-white
          bg-opacity-70 md:bg-opacity-30 hover:bg-opacity-70 
          text-black md:text-white hover:text-black
          transition-opacity md:opacity-30 hover:opacity-100`}
          >
            <RichContent post={news} />
          </a>
        </Link>}
      </div>

      <Link href="/works">
        <a.a style={{ opacity: second.opacity, transform: second.transform.interpolate(translate) }} 
        className="hidden md:block z-10 absolute bottom-14 right-14 py-2 px-4 cursor-pointer">
          <div className={`flex items-center 
          text-2xl text-gray-300 border-b border-white border-opacity-30
          transform transition-transform hover:scale-105 `}>
            Explorez mes oeuvres
            <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
        </a.a>
      </Link>

    </Layout>
  )
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