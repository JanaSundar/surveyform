import '@fontsource/inter';
import '@fontsource/nunito';
import '@fontsource/nunito/700.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
