import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';

config.autoAddCss = false;

const productGridSection = css`
  margin-top: 100px;
  margin-bottom: 100px;

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: gray;
    margin-bottom: 50px;
    font-family: 'Gorditas', cursive;
  }
`;
const productGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(3, 300px);
  align-items: center;
  grid-gap: 1rem;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;

  > li {
    box-shadow: 1px 0px 5px #a8a8a8;
    border: none;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 270px;
    height: 300px;
  }
  > li > a {
    text-decoration: none;
  }
  > li > a > span {
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    color: gray;
  }

  > li > a > span > img {
    width: 100px;
    height: 100px;
  }

  > li > a > span > h2 {
    font-size: 20px;
    color: gray;
    font-weight: bold;
    padding-top: -30px;
    font-family: 'Gorditas', cursive;
    padding-right: 15px;
    padding-left: 15px;
  }
  > li > span {
    margin-top: 20px;
  }
  > li > span > a {
    color: red;
    font-size: 16px;
    text-decoration: none;
  }
`;

export default function ClothingPage(props) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <NavMenu />

      <section css={productGridSection}>
        <h1>Clothing</h1>
        <ul css={productGrid}>
          {props.products
            .filter((product) => product.category === 'Clothing')
            .map((sortedProduct) => (
              <li key={`product-${sortedProduct.id}`}>
                <Link href={`/products/${sortedProduct.id}`}>
                  <a>
                    <span>
                      <img src={sortedProduct.image} alt="Product" />
                    </span>
                    <span>
                      <h2>{sortedProduct.productName}</h2>
                    </span>
                    <span>{sortedProduct.price}</span>
                  </a>
                </Link>
                <span>
                  <a href="#1">Add to basket</a>
                </span>
              </li>
            ))}
        </ul>
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
