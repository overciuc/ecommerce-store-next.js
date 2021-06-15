import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { css, Global } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          /* More natural sizing model */
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            /* Remove the default margin on the body */
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
              Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
          }
        `}
      />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gorditas&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
