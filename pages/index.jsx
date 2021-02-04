import Layout from '../components/Layout/Layout.jsx';
import { useCallback, useEffect } from 'react';
import { animated, config, useTrail } from 'react-spring';
import { getPageBySlug } from '../lib/ghost.js';
import Flickity from 'react-flickity-component';

export default function Home({ page }) {

  const [[first, second]] = useTrail(2, () => ({
    from: { opacity: 0, transform: -30 },
    to: { opacity: 1, transform: 0 },
    delay: 600,
    config: config.molasses,
  }));

  const translate = useCallback(x => `translateX(${x}px)`);

  console.log(page.imgs)

  return (
    <Layout menuBgTransparent>
      <div className="block absolute h-screen w-screen top-0 left-0">
        <Flickity static className="h-full w-full"
        options={{
          draggable: false,
          fade: true,
          autoPlay: true,
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
      <div className="relative h-screen flex overflow-hidden">

        <div className="ml-8 mr-4 flex flex-col justify-center text-white">
          <animated.h1 style={{ opacity: first.opacity, transform: first.transform.interpolate(translate) }}
            className="opacity-0 text-5xl md:text-8xl font-bold px-4 border-b border-opacity-30 border-white">
            Anne Pantillon
          </animated.h1>
          <animated.h2 style={{ opacity: second.opacity, transform: second.transform.interpolate(translate) }}
            className="opacity-0 text-2xl text-gray-300 shadow-xl px-4">
            Artiste Plasticienne 
          </animated.h2>
        </div>

      </div>
    </Layout>
  )
}

// Fetch necessary data for the current page
export async function getStaticProps() {

  const page = await getPageBySlug('accueil');

  return {
    props: { page }
  };
}