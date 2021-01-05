import Layout from '../components/Layout/Layout.jsx';
import React from 'react';
import { animated, config, useSpring, useTrail } from 'react-spring';

export default function Home() {

  const [[first, second]] = useTrail(2, () => ({
    from: { opacity: 0, transform: -30 },
    to: { opacity: 1, transform: 0 },
    delay: 600,
    config: config.molasses,
  }));

  const [spring] = useSpring(() => ({
    from: { backgroundSize: '100% 100%' },
    to: async (next) => {
      let reverse = 1;
      while(true) {
        await next({backgroundSize: reverse ? '125% 125%' : '100% 100%'});
        reverse = !reverse;
      }
    },
    delay: 1000,
    config: {duration: 30000, reset: true}
  }));

  const translate = x => `translateX(${x}px)`;

  return (
    <Layout>
      <animated.div className="h-full bg-cover bg-center flex" style={{ backgroundImage: 'url("/technique.png")', backgroundSize: spring.backgroundSize }}>
        <div className="ml-8 mr-4 flex flex-col justify-center text-white">
          <animated.h1 style={{ opacity: first.opacity, transform: first.transform.interpolate(translate) }}
          className="opacity-0 text-5xl md:text-8xl font-bold px-4 border-b border-opacity-30 border-white">
            Anne Pantillon
          </animated.h1>
          <animated.h2 style={{ opacity: second.opacity, transform: second.transform.interpolate(translate) }}
          className="opacity-0 text-2xl text-gray-300 shadow-xl px-4">
            Artiste Peintre
          </animated.h2>
        </div>
      </animated.div>
    </Layout>
  )
}
