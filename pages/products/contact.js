import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';

config.autoAddCss = false;

const contactUsPage = css`
  margin-top: 50px;
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
export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <NavMenu />

      <section css={contactUsPage}>
        <h1>Contact Us</h1>
      </section>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  // This will cause an error (you cannot
  // import like this in a function):
  //
  // import { users } from '../../util/database';

  const { products } = await import('../../util/database');

  // This console.log doesn't show up in the browser
  //
  // It will ONLY show up in Node.js (because this
  // code is ONLY running on the server)
  console.log('products', products);

  return {
    props: {
      products: products,
    },
  };
}
