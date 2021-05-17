import Button from '../Button/Button.jsx';

const Contact = () => {
  return (
    <div
      className={`flex flex-col mt-14 text-black
    bg-white overflow-hidden
      md:h-full md:mr-12 md:mt-0 md:w-auto`}
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

        <Button asAnchor href="mailto:atelier.annepantillon@gmail.com" className="underline normal-case transform-none">
          atelier.anne.pantillon@gmail.com
        </Button>

        <a className="text-2xl text-shadow" href="tel:+41794144522">
          +41 79 414 45 22
        </a>
      </div>
    </div>
  );
};

export default Contact;
