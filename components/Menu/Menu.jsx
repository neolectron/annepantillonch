import { useState, useRef, useEffect, useCallback } from 'react';
import { useClickAway, useKey, useMedia } from 'react-use';
import { animated, useSpring, config } from 'react-spring';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

import styles from './menu.module.css';

const Menu = ({ children }) => {
  const menuRef = useRef(null);
  const listRef = useRef(null);

  const [open, setOpen] = useState(null);

  useClickAway(menuRef, () => setOpen(false));
  useKey('Escape', () => setOpen(false));
  const isDesktop = useMedia('(min-width: 768px)');

  const springConfig = useCallback(
    () => ({
      config: config.stiff,
      immediate: open === null,
    }),
    [open]
  );

  const [menuSpring, menuApi] = useSpring(springConfig);
  const [listSpring, listApi] = useSpring(springConfig);

  useEffect(() => {
    if (!listRef.current) return;

    const { width, height } = listRef.current.getBoundingClientRect();

    if (isDesktop) {
      const styles = {
        translateX: open ? 0 : width - 48,
        translateY: 0,
      };
      menuApi.start(styles);
      listApi.start({ ...styles, height });
    } else {
      const styles = {
        translateY: 0,
        translateX: 0,
      };
      listApi.start({ ...styles, height: open ? height : 0 });
      menuApi.start(styles);
    }
  }, [isDesktop, menuApi, listApi, listRef, open]);

  return (
    <animated.div
      className={`z-20 fixed top-0 right-0 flex flex-col h-auto w-full
      md:h-full md:w-72  md:border-b-0 md:border-l
      bg-white text-black border-black
      border-b border-opacity-20`}
      style={menuSpring}
      onClick={() => setOpen(!open)}
      ref={menuRef}
    >
      <div className="flex w-full p-2 pt-3 pl-2 h-14">
        <Icon name="burger.svg" width="32" height="32" className="transform cursor-pointer hover:scale-110" />
      </div>

      {/* Menu Items List */}
      <animated.div className="flex-grow w-full overflow-hidden" style={listSpring}>
        <div ref={listRef} className="flex flex-col w-full md:h-full">
          <nav className={`${styles.menuChildren} w-full flex-grow flex flex-col text-xl uppercase select-none`}>
            {children}
          </nav>
          <div className={`flex ml-14 mb-2 items-start justify-start`}>
            <Button
              asAnchor
              target="_blank"
              href="https://www.linkedin.com/in/anne-pantillon-3b1b7468/"
              icon="linkedin.svg"
              className="m-2 ml-0 transform hover:scale-110"
            />
            <Button
              asAnchor
              target="_blank"
              href="https://www.instagram.com/anne_pantillon/"
              icon="instagram.svg"
              className="m-2 transform hover:scale-110"
            />
            <Button
              asAnchor
              target="_blank"
              href="https://www.youtube.com/channel/UCJ7Zo_T1yTfsNVWu6REvi_w"
              icon="youtube.svg"
              className="m-2 transform hover:scale-110"
            />
            <Button
              asAnchor
              target="_blank"
              href="https://www.facebook.com/atelier.anne.pantillon"
              icon="facebook.svg"
              className="m-2 ml-0 transform hover:scale-110"
            />
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Menu;
