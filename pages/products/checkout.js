import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';
import PageHeading from '../../components/PageHeading';
import getBasketCookieValue from '../../util/cookies';

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
  //padding: 20px 30px;
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

const tableSection = css`
  display: flex;
  width: 100%;
  top: 0;
  > table {
    border-collapse: collapse;
  }
`;

const tableStyles = css`
  width: 100%;
  > tr > th {
    padding: 15px;
    text-align: left;
    border: 1px solid rgba(255, 192, 203, 0.4);
  }

  > tr > td {
    text-align: left;
    padding: 15px;
    border: 1px solid rgba(255, 192, 203, 0.4);
    align-items: center;
  }
`;

const productGrid = css`
  max-width: 1300px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 3rem;
  text-align: center;
  list-style-type: none;
  margin-bottom: 50px;

  > div {
    text-align: left;
    width: 600px;
    display: block;
    margin: auto;
  }
`;

const detailsForm = css`
  > div > input {
    border-radius: 25px;
    height: 50px;
    width: 500px;
    border: 1px solid #00bbf9;
    margin-bottom: 10px;
    display: block;
    margin-top: 10px;
    outline: none;
    font-family: inherit;
    padding-left: 20px;
    ::placeholder {
      color: gray;
      opacity: 0.5;
      font-size: 16px;
    }
  }

  > div > span > input {
    border-radius: 25px;
    height: 50px;
    width: 242px;
    border: 1px solid #00bbf9;
    margin-bottom: 10px;
    display: inline-block;
    margin-top: 10px;
    outline: none;
    font-family: inherit;
    padding-left: 20px;
    ::placeholder {
      color: gray;
      opacity: 0.5;
      font-size: 16px;
    }
  }
`;

const marginRight = css`
  margin-right: 15px;
`;

export default function Checkout() {
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <NavMenu />
      <PageHeading />
      <section css={checkoutPage}>
        <div>
          <Link href="/">
            <a>Home &nbsp; &#62; </a>
          </Link>
          <Link href="/products/allProductsPage">
            <a>&nbsp; Shop &nbsp; &#62; </a>
          </Link>
          <Link href="/products/basket">
            <a>&nbsp; Shopping Cart &nbsp; &#62; </a>
          </Link>
          <span>&nbsp; Checkout</span>
        </div>

        <div css={productGrid}>
          <div css={tableSection}>
            <h3>Your order</h3>
            <table css={tableStyles}>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
              {Object.keys(getBasketCookieValue()).map((productId) => (
                <tr key={productId}>
                  <td>product name</td>
                  <td>quantity</td>
                  <td>cost</td>
                </tr>
              ))}
              <tr>
                <td>Total cost:</td>
                <td colspan="2">&#x20AC;</td>
              </tr>
            </table>
          </div>

          <div css={detailsForm}>
            <h3>Billing and Shipping Details</h3>
            <div>
              <span css={marginRight}>
                <input placeholder="First Name" />
              </span>
              <span>
                <input placeholder="Last Name" />
              </span>
            </div>
            <div>
              <input placeholder="Street" />
            </div>
            <div>
              <input placeholder="House/Apt Number" />
            </div>
            <div>
              <span css={marginRight}>
                <input placeholder="Zip Code" />
              </span>
              <span>
                <input placeholder="Town / City" />
              </span>
            </div>

            <div>
              <input placeholder="Country" />
            </div>
            <div>
              <input placeholder="Phone Number" />
            </div>
            <div>
              <input placeholder="Email Address" />
            </div>
          </div>
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
