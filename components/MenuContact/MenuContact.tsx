import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Link from 'next/link';
import { useState } from 'react';
import { useTransition, a } from 'react-spring';

const AContact = a(Contact);

const MenuContact = () => {
  const [show, set] = useState(false);
  const closeContact = () => set(false);

  const transitions = useTransition(show, {
    from: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -100 },
  });

  return (
    <>
      {transitions((props) => show && <AContact style={props} onClickAway={closeContact} onEscape={closeContact} />)}
      <Menu>
        <Link href="/">
          <a>ACCUEIL</a>
        </Link>
        <Link href="/news">
          <a>ACTUALITÉS</a>
        </Link>
        <Link href="/works">
          <a>TRAVAUX</a>
        </Link>
        <Link href="/about">
          <a>À PROPOS</a>
        </Link>
        <Link href="/press">
          <a>PRESSE</a>
        </Link>
        <a href="#" onClick={() => set(true)}>
          CONTACT
        </a>
      </Menu>
    </>
  );
};

export default MenuContact;
