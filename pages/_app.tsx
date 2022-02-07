import Head from 'next/head';

import '../styles/_app.css';
import 'flickity/css/flickity.css';
import 'flickity-fullscreen/fullscreen.css';
import '../styles/flickity.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
