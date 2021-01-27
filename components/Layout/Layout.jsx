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
      {/* <Menu Bgtransparent={menuBgTransparent} >
        <Link href="/"><a># Home</a></Link>
        <Link href="/works"><a># Works</a></Link>
        <Link href="/news"><a># News</a></Link>
        <a href="#" onClick={() => setOpen(x => !x)}># Contact</a>
      </Menu>
      <Contact opened={isOpen} /> */}
      <main className="overflow-y-auto bg-gray-200 h-full">
        {children}
      </main>
      <MenuContact menuBgTransparent={menuBgTransparent} />
    </div>
  );
}

export default Layout