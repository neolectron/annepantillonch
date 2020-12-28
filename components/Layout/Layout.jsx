import Head from 'next/head'; 
import { useState } from 'react';

import Menu from '../Menu/Menu';

const Layout = ({ title, children, column }) => {

  // const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(val => !val);
  return (
    <div id="layout-wrapper" className="h-full"> 
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      {/* <button onClick={toggleMenu} >Menu</button> */}
      <Menu width={280} >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
      </Menu>
      <main id="page-content" className="flex flex-col bg-gray-200 h-full p-1 md:p-10" style={{marginRight: 60}}>
        {children}
      </main>
    </div>
  );
}

export default Layout