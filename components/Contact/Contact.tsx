import Button from '../Button/Button';
import { useClickAway, useKey } from 'react-use';
import { useRef } from 'react';

const Contact = ({ onClickAway, onEscape }) => {
  const contactRef = useRef(null);
  useClickAway(contactRef, onClickAway);
  useKey('Escape', onEscape);

  return (
    <div
      ref={contactRef}
      className="mt-14 md:h-full md:mr-12 md:mt-0 md:w-auto fixed top-0 right-0 flex flex-col overflow-hidden text-black bg-white"
    >
      <img src="profil.jpg" alt="photo de profil" className="h-48" />
      <div className="flex flex-col items-center justify-center h-full p-4 pt-8 text-xl">
        <address className="not-italic text-center">
          Anne Pantillon
          <br />
          Rue de Sébeillon 9a
          <br />
          1004 Lausanne, Suisse
        </address>

        <Button asAnchor href="mailto:atelier.annepantillon@gmail.com" className="transform-none underline normal-case">
          atelier.anne.pantillon@gmail.com
        </Button>

        <a className="text-shadow text-2xl" href="tel:+41794144522">
          +41 79 414 45 22
        </a>
      </div>
    </div>
  );
};

export default Contact;
