import '../styles/_app.css';
import 'flickity/css/flickity.css';
import 'flickity-fullscreen/fullscreen.css';
import '../styles/flickity.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
