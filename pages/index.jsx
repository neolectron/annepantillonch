import Layout from '../components/Layout/Layout.jsx';
import React, { useEffect, useState } from 'react';
import { animated, config,  useTrail } from 'react-spring';

export default function Home() {
  const [isAnimated, setAnimated] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimated(true), 1000);
    const interval = setInterval(() => {
      setAnimated(x => !x);
    }, 21 * 1000);

    return () => clearInterval(interval);
  }, []);

  const [[first, second]] = useTrail(2, () => ({
    from: { opacity: 0, transform: -30 },
    to: { opacity: 1, transform: 0 },
    delay: 600,
    config: config.molasses,
  }));

  const translate = x => `translateX(${x}px)`;

  return (
    <Layout menuBgTransparent>
      <div className="relative h-full flex overflow-hidden">

        <div style={{ backgroundImage: 'url("/technique.png")', transitionDuration: '20s' }}
          className={`absolute w-full h-full bg-cover pointer-events-none
          transition-transform transform origin-right ease-linear
          ${isAnimated ? 'scale-125' : 'scale-100'}`}>
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
