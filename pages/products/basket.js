import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';
import { getBasketCookieValue } from '../../util/cookies';

config.autoAddCss = false;

const basketSection = css`
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

const tableSection = css`
  display: flex;
  position: relative;
  width: 1300px;
  justify-content: center;
  margin: auto;
  padding: 50px 30px;
  > table {
    border-collapse: collapse;
  }
`;

const tableStyles = css`
  width: 100%;
  > tr > th {
    padding: 15px;
    text-align: center;
    border: 1px solid rgba(255, 0, 0, 0.2);
  }

  > tr > td {
    text-align: left;
    padding: 15px;
    border: 1px solid rgba(255, 0, 0, 0.2);
    align-items: center;
  }
  > tr > td > img {
    width: 100px;
    height: 100px;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
`;

const deleteButtonStyle = css`
  margin-right: auto;
  margin-left: auto;
  display: block;
  text-align: center;
  color: pink;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const centerText = css`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const counter = css`
  width: 150px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  > input {
    width: 50px;
    border: none;
    font-size: 16px;
    text-align: center;
    color: gray;
    appearance: none;
  }
  > button {
    display: block;
    font-size: 25px;
    padding: 0 10px;
    cursor: pointer;
    color: #0052cc;
    user-select: none;
    border: none;
  }
`;

export default function Basket(props) {
  const [productQuantity, setProductQuantity] = useState(1);

  function getProductById(productId) {
    return props.products.filter((product) => product.id === productId)[0];
  }

  return (
    <Layout>
      <Head>
        <title>Cart</title>
      </Head>
      <NavMenu />

      <section css={basketSection}>
        <h1>Your Products</h1>
        <div css={tableSection}>
          <table css={tableStyles}>
            <tr>
              <th />
              <th>Product Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
            {getBasketCookieValue().map((productId) => (
              <tr key={productId}>
                <td>
                  <img src={getProductById(productId).image} alt="product" />
                </td>
                <td>{getProductById(productId).productName}</td>
                <td>{getProductById(productId).shortDescription}</td>
                <td>
                  <span css={counter}>
                    <button
                      onClick={() => {
                        setProductQuantity(productQuantity - 1);
                      }}
                    >
                      -
                    </button>
                    <input type="text" value={productQuantity} />
                    <button
                      onClick={() => {
                        setProductQuantity(productQuantity + 1);
                      }}
                    >
                      +
                    </button>
                  </span>
                </td>
                <td>
                  <span css={centerText}>
                    {getProductById(productId).price}
                  </span>
                </td>
                <td>
                  <span css={deleteButtonStyle}>x</span>
                </td>
              </tr>
            ))}
          </table>
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
