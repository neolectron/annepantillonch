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
    cursor-pointer fixed z-50 flex right-0 h-full 
    transition-all duration-500 ease 
    bg-black text-white`}
      onClick={() => !open && setOpen(true)}>
      <button className="absolute outline-none cursor-pointer right-4 top-2 text-2xl transform transition-transform hover:rotate-90"
      onClick={() => setOpen(x => !x)}>&times;</button>
      <div className={`${styles.menuOffset} p-4`}>
        <img src="/ap.png" style={{ filter: 'invert(1)' }} className="transform transition-transform hover:scale-110 hover:rotate-90" alt="logo menu" />
      </div>
      <nav className="flex flex-col flex-grow p-4 pt-16">
        {children}
      </nav>
    </div>
  );
};

export default Menu