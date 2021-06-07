import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavMenu from '../components/NavMenu';

config.autoAddCss = false;

const aboutPage = css`
  margin-top: 100px;
  margin-bottom: 100px;

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: gray;
    margin-bottom: 20px;
    font-family: 'Gorditas', cursive;
  }
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <NavMenu />

      <section css={aboutPage}>
        <h1>Who We Are</h1>
      </section>

      <Footer />
    </Layout>
  );
}
