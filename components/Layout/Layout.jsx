import Head from 'next/head';
import MenuContact from '../MenuContact/MenuContact.jsx';

const Layout = ({ title, menuBgTransparent, children }) => {

  const pageTitle = title ? `- ${title}` : '- Artiste Plasticienne';

  return (
    <div className="relative h-full"> 
      <Head>
        <title>{`Anne Pantillon ${pageTitle}`}</title>
        <meta property="og:title" content={`Anne Pantillon ${pageTitle}`} key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative bg-gray-200 min-h-full">
        {children}
      </main>
      <MenuContact menuBgTransparent={menuBgTransparent} />
    </div>
  );
}

export default Layout