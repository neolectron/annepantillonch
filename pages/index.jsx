import Layout from '../components/Layout/Layout.jsx';
import { useCallback, useEffect } from 'react';
import { animated, config, useTrail } from 'react-spring';
import { getPageBySlug, getPostListByTags } from '../lib/ghost.js';
import Flickity from 'react-flickity-component';

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

      <div className="block fixed h-screen w-screen top-0 left-0">
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

      <div className="relative flex">
        <div className="ml-8 mr-4 flex flex-col justify-center items-center text-white">

          <animated.h1 style={{ marginTop: '50%', opacity: first.opacity, transform: first.transform.interpolate(translate) }}
            className="opacity-0 text-5xl md:text-8xl font-bold px-4 border-b border-opacity-30 border-white">
            Anne Pantillon
          </animated.h1>
          <animated.h2 style={{ opacity: second.opacity, transform: second.transform.interpolate(translate) }}
            className="opacity-0 text-2xl text-gray-300 shadow-xl px-4">
            Artiste Plasticienne 
          </animated.h2>

          {news && <div 
            className={`text-xl border-white border bg-white bg-opacity-30
            p-8 my-14 overflow-hidden overflow-ellipsis
            transition-opacity opacity-30 hover:opacity-100
            hover:text-black hover:bg-opacity-70
            cursor-pointer`}
            style={{maxWidth: 600,}}
            dangerouslySetInnerHTML={{__html: news.html}}>
          </div>}

        </div>
      </div>
    </Layout>
  )
}

// Fetch necessary data for the current page
export async function getStaticProps() {

  const page = await getPageBySlug('accueil');
  const [ news ] = await getPostListByTags('featured');

  return {
    props: { 
      page: page || {imgs: [{src: '/technique.png'}]}, 
      news: news || null,
    }
  };
}