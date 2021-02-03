import Menu from '../../components/Menu/Menu.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useClickAway, useKey } from 'react-use';
import { useTransition, animated, config } from 'react-spring';

const MenuContact = ({menuBgTransparent}) => {

  const [show, set] = useState(false);
  const contactRef = useRef(null);

  useClickAway(contactRef, () => set(false));
  useKey('Escape', () => set(false));

  const transitions = useTransition(show, null, {
    from:  { opacity: 0, transform: 'translate3d(100px,0,0)'},
    enter: { opacity: 1, transform: 'translate3d(0px,0,0)'},
    leave: { opacity: 0, transform: 'translate3d(100px,0,0)'},
    config: config.slow,
  });

  return (<>
    {transitions.map(({ item, key, props }) => {
      if(!item) return null;

      return (
        <animated.div ref={contactRef} key={key} style={props} 
          className={`fixed top-0 right-0 w-full
            md:w-auto md:h-full`} >
          <Contact />
        </animated.div>
      )
    })}

    <Menu Bgtransparent={menuBgTransparent} >
      <Link href="/"><a>Home</a></Link>
      <Link href="/news"><a>News</a></Link>
      <Link href="/works"><a>Works</a></Link>
      <a href="#" onClick={() => set(x => !x)}>Contact</a>
    </Menu>
  </>)
}

export default MenuContact;