import '../styles/_app.css';
import 'flickity/css/flickity.css';
import 'flickity-fullscreen/fullscreen.css';
import '../styles/flickity.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
