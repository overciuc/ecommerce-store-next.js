import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';

config.autoAddCss = false;

const blogPage = css`
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

const blogPost = css`
  max-width: 1300px;
  display: flex;
  position: relative;
  justify-content: center;
  margin: auto;

`;

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <NavMenu />

      <section css={blogPage}>
        <h1>Welcome to our Shop</h1>
        <div css={blogPost}>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
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
