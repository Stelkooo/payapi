/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { DM_Serif_Display, Public_Sans } from 'next/font/google';

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
});
const publicSans = Public_Sans({ variable: '--font-sans', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${publicSans.style.fontFamily};
            --font-serif: ${dmSerifDisplay.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
