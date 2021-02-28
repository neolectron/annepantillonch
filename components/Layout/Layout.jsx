import Head from 'next/head';
import MenuContact from '../MenuContact/MenuContact.jsx';

const Layout = ({
  title = 'Artiste Plasticienne',
  menuBgTransparent,
  className = '',
  children,
}) => {
  const pageTitle = `Anne Pantillon - ${title}`;

  return (
    <div className="flex flex-col min-h-full bg-gray-100">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex-grow flex flex-col mt-14 md:mt-0 md:mr-12 ${className}`}
      >
        {children}
      </main>
      <MenuContact menuBgTransparent={menuBgTransparent} />
    </div>
  );
};

export default Layout;
