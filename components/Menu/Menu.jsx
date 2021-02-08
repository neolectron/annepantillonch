import React, { useState, useRef, useEffect } from "react";
import { useClickAway, useKey, useMedia } from 'react-use';
import { animated, useSpring, config } from 'react-spring';

import styles from './menu.module.css';
import Icon from "../Icon/Icon";

const Menu = ({children, Bgtransparent}) => {
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

  useEffect(() => {
    stop();
    const { width, height } = listRef.current.getBoundingClientRect();
    // open === null is here to check if the animation run for the first time
    if(isDesktop) { // 48 is 3rem, which is w-12 in tailwind
      setSpring({ height: height, translate: (open ? 0 : width - 48), immediate: (open === null) });
    }
    else { // 56px is 3.5rem, which is h-14 in tailwind
      setSpring({ height: (open ? height : 0), translate: 0, immediate: (open === null)});
    }

  }, [listRef, open, isDesktop, spring, setSpring, stop]);

    console.log(`we're on ${isDesktop ? 'desktop':'mobile'}, and menu is ${open ? 'open' : 'closed'}`);

  return (
    <animated.div
      className={`z-20 fixed top-0 right-0 flex flex-col h-auto w-full
      md:h-full md:w-72 md:border-l md:border-b-0
      ${Bgtransparent ? 'bg-transparent text-white border-white' : 'bg-white text-black border-black' }
      font-bold border-b border-opacity-20`}
      style={{ transform: spring.translate.interpolate(x => `translate3d(${x}px,0,0)`), backdropFilter: `blur(5px)` }}
      onClick={() => setOpen(!open)}
      ref={menuRef}
    >

      <div className="w-full h-14 flex items-center p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer transform hover:scale-110" viewBox="0 0 32 32" width="32" height="32" focusable="false">
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
        </svg>
      </div>

      <animated.div className="w-full " style={{ overflow: 'hidden', height : spring.height }}>
        <div ref={listRef}>
          <nav className={`${styles.menuChildren} w-full flex flex-col text-xl select-none`}>
            {children}
          </nav>
          <div className={`flex ml-14 items-start justify-start`}>
            <a href="https://www.instagram.com/anne_pantillon/" target="_blank"
            className="m-2 transform hover:scale-110">
              <Icon name="instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCJ7Zo_T1yTfsNVWu6REvi_w" target="_blank" 
            className="m-2 transform hover:scale-110">
              <Icon name="youtube" />
            </a>
            <a href="https://www.facebook.com/atelier.anne.pantillon" target="_blank" 
            className="m-2 transform hover:scale-110">
              <Icon name="facebook" />
            </a>
            <a href="https://www.linkedin.com/in/anne-pantillon-3b1b7468/" target="_blank" 
            className="m-2 transform hover:scale-110">
              <Icon name="linkedin" />
            </a>
          </div>
        </div>
      </animated.div>

    </animated.div>
  );
};

export default Menu;