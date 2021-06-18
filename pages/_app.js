import '@fortawesome/fontawesome-svg-core/styles.css';
import '../css/main.css';
import { css, Global } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import { useState } from 'react';
import { getBasketCookieValue } from '../util/cookies';

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useState(getBasketCookieValue());

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
              Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
          }
        `}
      />

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Component
        {...pageProps}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />
    </>
  );
}
