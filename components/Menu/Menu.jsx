import { useState, useRef } from "react";
import { useClickAway, useKey } from 'react-use';

import styles from './menu.module.css';

const Menu = ({children}) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useClickAway(ref, () => setOpen(false));
  useKey('Escape', () => setOpen(false));

  return (
    <div ref={ref} className={`${styles.menu} ${open ? '' : styles.menuClosed}
    fixed flex right-0 h-full 
    transition-all duration-500 ease 
    bg-black text-white`}
      onClick={() => !open && setOpen(true)}>
      <button className="absolute outline-none cursor-pointer right-4 top-2 text-2xl"
      onClick={() => setOpen(x => !x)}>&times;</button>
      <div className={`${styles.menuOffset} p-4`}>
        open
      </div>
      <nav className="flex flex-col flex-grow p-4 pt-16">
        {children}
      </nav>
    </div>
  );
};

export default Menu