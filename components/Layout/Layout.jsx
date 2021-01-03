import Head from 'next/head';
import Link from 'next/link';

import { React, /*useState*/ } from 'react';

import Menu from '../Menu/Menu';

const Layout = ({ title, children }) => {

  const pageTitle = title ? `- ${title}` : '- Artiste Peintre';

  return (
    <div className="relative h-full"> 
      <Head>
        <title>{`Anne Pantillon ${pageTitle}`}</title>
        <meta property="og:title" content={`Anne Pantillon ${pageTitle}`} key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu width={280}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/works"><a>Works</a></Link>
        <Link href="/about"><a>About</a></Link>
      </Menu>
      <main className="overflow-y-auto bg-gray-200 h-full">
        {children}
      </main>
    </div>
  );
}

export default Layout