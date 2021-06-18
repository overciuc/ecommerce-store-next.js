import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';

config.autoAddCss = false;

const checkoutHeading = css`
  width: 100%;
  height: 200px;
  background-color: #249af0;
  margin: auto;
  margin-top: -50px;
  margin-bottom: 10px;
  justify-content: center;
  display: flex;

  > span > h1 {
    width: 1300px;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 40px;
    font-family: 'Gorditas', cursive;
    padding-top: 50px;
    text-align: left;
    border-top: 1px solid #fff;
  }
`;
const checkoutPage = css`
  margin-top: 20px;
  margin-bottom: 100px;
  max-width: 1300px;
  width: 100%;
  margin: auto;

  > div > a {
    width: 100%;
    font-size: 16px;
    color: black;
    text-decoration: none;
    padding-bottom: 20px;
    text-align: left;
    margin-bottom: 50px;
    font-family: 'Baloo Tammudu 2', cursive;
  }
  > div > span {
    color: red;
    font-family: 'Baloo Tammudu 2', cursive;
  }
`;

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
    padding: 20px 15px;

    width: 285px;
    height: 300px;
    transition: transform 0.3s ease;
    :hover {
      transform: translate(0, -10px);
    }
  }

  > li > a > span > img {
    width: 100px;
    height: 100px;
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
  > li > a > span > h2 {
    font-size: 20px;
    color: gray;
    font-weight: bold;
    padding-top: -30px;
    font-family: 'Gorditas', cursive;
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

export default function Toys(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Toys</title>
      </Head>
      <NavMenu shoppingCart={props.shoppingCart} />
      <div css={checkoutHeading}>
        <span>
          <h1 data-cy="toys-page-h1">Toys</h1>
        </span>
      </div>

      <section css={checkoutPage}>
        <div>
          <Link href="/">
            <a>Home &nbsp; &#62; </a>
          </Link>
          <Link href="/products/allProductsPage">
            <a>&nbsp; Shop &nbsp; &#62; </a>
          </Link>
          <span>&nbsp; Toys</span>
        </div>
        <div css={productGridSection}>
          <ul css={productGrid}>
            {props.products
              .filter((product) => product.category === 'Toys')
              .map((sortedProduct) => (
                <li key={`product-${sortedProduct.id}`}>
                  <Link href={`/products/${sortedProduct.id}`}>
                    <a data-cy={`toys-page-product-${sortedProduct.id}`}>
                      <span>
                        <Image
                          src={sortedProduct.productImage}
                          alt="Product"
                          width={100}
                          height={100}
                        />
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
        </div>
      </section>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../../util/database');

  const products = await getProducts();

  console.log('products', products);

  return {
    props: {
      products: products,
    },
  };
}
