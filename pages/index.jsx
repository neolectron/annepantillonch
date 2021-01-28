import Layout from '../components/Layout/Layout.jsx';
import { useCallback } from 'react';
import { animated, config, useTrail } from 'react-spring';

export default function Home() {

  const [[first, second]] = useTrail(2, () => ({
    from: { opacity: 0, transform: -30 },
    to: { opacity: 1, transform: 0 },
    delay: 600,
    config: config.molasses,
  }));

  const translate = useCallback(x => `translateX(${x}px)`);
  
  return (
    <Layout menuBgTransparent>
      <div className="relative h-screen flex overflow-hidden">

        <div style={{ backgroundImage: 'url("/technique.png")'}}
          className={`absolute w-full h-full bg-cover bg-pulse pointer-events-none origin-right`}>
        </div>

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
