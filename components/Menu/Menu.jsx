import { useState, useRef, useEffect } from "react";
import { useClickAway, useKey, useMedia } from 'react-use';
import { animated, useSpring, config } from 'react-spring';
import Icon from "../Icon/Icon.jsx";
import Button from "../Button/Button.jsx";

import styles from './menu.module.css';

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

  return (
    <animated.div
      className={`z-20 fixed top-0 right-0 flex flex-col h-auto w-full
      md:h-full md:w-72  md:border-b-0 md:border-l
      ${Bgtransparent ? 'bg-opacity-30 bg-black text-white border-white' : 'bg-white text-black border-black' }
      border-b border-opacity-20`}
      style={{ transform: spring.translate.interpolate(x => `translate3d(${x}px,0,0)`), backdropFilter: `blur(5px)` }}
      onClick={() => setOpen(!open)}
      ref={menuRef}
    >

      <div className="w-full h-14 flex  p-2" style={{ paddingLeft: 9, paddingTop: 11 }}>
        <Icon name="burger" width="32" height="32" className="cursor-pointer transform hover:scale-110" />
      </div>

      <animated.div className="w-full flex-grow" style={{ overflow: 'hidden', height : spring.height }}>
        <div ref={listRef} className="w-full md:h-full flex flex-col">
          <nav className={`${styles.menuChildren} w-full flex-grow flex flex-col text-xl uppercase select-none`}>
            {children}
          </nav>
          <div className={`flex ml-14 mb-2 items-start justify-start`}>
            <Button asAnchor 
              target="_blank" href="https://www.linkedin.com/in/anne-pantillon-3b1b7468/" 
              icon="linkedin" reversed={Bgtransparent} 
              className="m-2 ml-0 transform hover:scale-110" />
            <Button asAnchor
              target="_blank" href="https://www.instagram.com/anne_pantillon/"
              icon="instagram" reversed={Bgtransparent}
              className="m-2 transform hover:scale-110" />
            <Button asAnchor
              target="_blank" href="https://www.youtube.com/channel/UCJ7Zo_T1yTfsNVWu6REvi_w"
              icon="youtube" reversed={Bgtransparent}
              className="m-2 transform hover:scale-110" />
            <Button asAnchor
              target="_blank" href="https://www.facebook.com/atelier.anne.pantillon"
              icon="facebook" reversed={Bgtransparent}
              className="m-2 ml-0 transform hover:scale-110" />
          </div>
        </div>
      </animated.div>

    </animated.div>
  );
};

export default Menu;