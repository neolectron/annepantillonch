import Head from 'next/head';
import MenuContact from '../MenuContact/MenuContact.jsx';

const Layout = ({ title, menuBgTransparent, mainClassName, children }) => {

  const pageTitle = title ? `- ${title}` : '- Artiste Plasticienne';

  return (
    <div className="min-h-full flex flex-col bg-gray-200"> 
      <Head>
        <title>{`Anne Pantillon ${pageTitle}`}</title>
        <meta property="og:title" content={`Anne Pantillon ${pageTitle}`} key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex-grow flex flex-col mt-14 md:mt-0 md:mr-12 ${mainClassName || ''}`}>
        {children}
      </main>
      <MenuContact menuBgTransparent={menuBgTransparent} />
    </div>
  );
}

export default Layout