const Contact = () => {
  return (
    <div className={`flex-col flex mt-12
    bg-black bg-opacity-40 overflow-hidden
      md:h-full md:pr-12 md:mt-0 md:w-auto`}
    style={{ minWidth: '280px' }}>

      <div className={`h-32 hidden md:block bg-center bg-cover bg-no-repeat bg-pulse duration-1000 origin-left`}
        style={{ backgroundImage: `url(/profil.jpeg)`, animationIterationCount: 1, animationFillMode: 'forwards'}}>
      </div>

      <div className="h-full flex flex-col items-center justify-center p-4 pt-8 text-white">
        <a className="block bg-transparent bg-gray-900 rounded-sm hover:bg-white hover:text-gray-900 font-bold py-2 px-4"
          href="mailto:annepantillon@gmail.com" target="_blank">
          Contact
        </a>
        <a className="mt-1 font-bold text-2xl text-shadow text-gray-300" href="tel:+41794144522">
          +41 79 414 45 22
        </a>
        <address className="mb-4 text-center text-2xl text-white not-italic">
          Rue de Sébeillon 9a<br />
          1004 Lausanne<br />
          Suisse
        </address>
      </div>
    </div>
  )
}

export default Contact;