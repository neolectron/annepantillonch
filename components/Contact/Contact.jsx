import Button from '../Button/Button.jsx';

const Contact = () => {
  return (
    <div className={`flex flex-col mt-12 text-white
    bg-black bg-opacity-30 overflow-hidden
      md:h-full md:mr-12 md:mt-0 md:w-auto`}
    style={{ minWidth: '400px' }}>

      <img src="profil.jpg" alt="photo de profil" className="h-48" />
      <div className="h-full flex flex-col items-center justify-center p-4 pt-8">

        <address className="text-center text-2xl not-italic">
          Anne Pantillon<br />
          Rue de Sébeillon 9a<br />
          1004 Lausanne, Suisse
        </address>

        <Button asAnchor href="mailto:atelier.annepantillon@gmail.com"
        className="normal-case transform-none underline text-2xl">
          atelier.anne.pantillon@gmail.com
        </Button>

      </div>
    </div>
  )
}

export default Contact;