import '@/styles/globals.css';
import {trpc} from '@/trpc/api';
import type {AppProps} from 'next/app';

function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);
