import Head from 'next/head';
import MenuContact from '../MenuContact/MenuContact';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title = 'Artiste Plasticienne', children }: LayoutProps) => {
  const pageTitle = `Anne Pantillon - ${title}`;

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-14 md:mt-0 md:mr-12 flex flex-col min-h-screen">{children}</main>
      <MenuContact />
    </div>
  );
};

export default Layout;
