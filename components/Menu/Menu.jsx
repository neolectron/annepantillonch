import React, { useState, useRef, useEffect } from "react";
import { useClickAway, useKey, useMedia } from 'react-use';
import { animated, useSpring, config } from 'react-spring';
import Link from 'next/link';

import styles from './menu.module.css';

const Menu = ({children}) => {
  const menuRef = useRef(null);
  const listRef = useRef(null);

  const [open, setOpen] = useState(null);

  useClickAway(menuRef, () => setOpen(false));
  useKey('Escape', () => setOpen(false));
  const isDesktop = useMedia('(min-width: 768px)');

  const [spring, setSpring, stop] = useSpring(() => ({
    from: { translate: 0, height: 0},
    config: config.stiff
  }));

  // console.log(`we're on ${isDesktop ? 'desktop':'mobile'}, and menu is ${open ? 'open' : 'closed'}`);

  useEffect(() => {
    stop();
    const {width, height} = listRef.current.getBoundingClientRect();
    
    // open === null is here to check if the animation run for the first time
    if(isDesktop) {
      setSpring({ height: height, translate: (open ? 0 : width - 50), immediate: (open === null) });
    }
    else {
      setSpring({ height: (open ? height : 0), translate: 0, immediate: (open === null)});
    }

  }, [listRef, open, isDesktop, spring, setSpring, stop]);


  return (
    <animated.div
      className={`fixed z-50 top-0 right-0 flex flex-col
      h-auto w-full 
      md:h-full md:w-72 md:border-l md:border-b-0
      bg-transparent border-b border-white border-opacity-20 text-white`}
      style={{ transform: spring.translate.interpolate(x => `translate3d(${x}px,0,0)`), backdropFilter: `blur(5px)` }}
      onClick={() => setOpen(!open)}
      ref={menuRef}
    >
      <div className="w-full flex justify-between p-2">
        <img height="32px" width="34px" src="/ap.png" style={{ filter: 'invert(1)' }} alt="logo menu" />
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" viewBox="0 0 32 32" width="32" height="32" focusable="false">
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
        </svg>
      </div>

      <animated.div className="w-full " style={{ overflow: 'hidden', height : spring.height }}>
        <div ref={listRef}>
          <nav className={`${styles.menuChildren} w-full flex flex-col text-xl select-none`}>
            {children}
          </nav>
          <div className={`flex ${open ? '' : 'md:flex-col md:ml-0'} ml-12 md:mt-40 border-t border-white border-opacity-20 items-start justify-start`}>
            <Link href="/#">
              <a className="m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d={`M24 4.557c-.883.392-1.832.656-2.828.775
                  1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127
                  1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797
                  6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523
                  6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949
                  4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07
                  1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142
                  0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`} />
                </svg>
              </a>
            </Link>
            <Link href="/#">
              <a className="m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d={`M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919
                  4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149
                  3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204
                  0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849
                  0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057
                  1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78
                  2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072
                  4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259
                  0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948
                  0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0
                  5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759
                  6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4
                  4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441
                  1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`} />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </animated.div>


    </animated.div>
  );
};

export default Menu