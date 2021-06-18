import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';
import { getBasketCookieValue } from '../../util/cookies';

config.autoAddCss = false;

const checkoutHeading = css`
  width: 100%;
  height: 150px;
  background-color: #249af0;
  margin: auto;
  margin-top: -50px;
  margin-bottom: 10px;
  justify-content: center;
  display: flex;

  > span > h1 {
    width: 1300px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
    font-family: 'Gorditas', cursive;
    padding-top: 20px;
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

const tableSection = css`
  display: flex;
  width: 100%;
  top: 0;
  margin-top: 20px;
  > table {
    border-collapse: collapse;
  }
`;

const tableStyles = css`
  width: 100%;
  > tr > th {
    padding: 5px;
    padding-top: 5px;
    text-align: left;
    border: 1px solid rgba(255, 192, 203, 0.4);
    font-family: 'Baloo Tammudu 2', cursive;
    color: gray;
    vertical-align: middle;
  }

  > tr > td {
    text-align: left;
    padding: 5px;
    border: 1px solid rgba(255, 192, 203, 0.4);
    align-items: center;
    font-family: 'Baloo Tammudu 2', cursive;
    color: gray;
    padding-top: 5px;
  }
`;

const productGrid = css`
  max-width: 1300px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  text-align: center;
  list-style-type: none;
  margin-bottom: 50px;

  > div {
    text-align: left;
    max-width: 650px;
    display: block;
  }
`;

const detailsForm = css`
  justify-content: left;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(254, 228, 65, 0.5);
  min-height: 500px;
  margin-top: -30px;
  float: left;
  max-width: 600px;

  > h3 {
    font-family: 'Gorditas', cursive;
    font-size: 24px;
    color: #9966cc;
    margin-bottom: 5px;
  }

  > p {
    font-size: 16px;
    color: gray;
    font-family: 'Baloo Tammudu 2', cursive;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  > div > input {
    border-radius: 25px;
    height: 40px;
    width: 500px;
    border: 1px solid #00bbf9;
    margin-bottom: 15px;
    display: block;
    margin-top: 15px;
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
    height: 40px;
    width: 242px;
    border: 1px solid #00bbf9;
    display: inline-block;
    outline: none;
    font-family: inherit;
    padding-left: 20px;
    ::placeholder {
      color: gray;
      opacity: 0.5;
      font-size: 16px;
    }
  }

  > div > label > input {
    border-radius: 25px;
    height: 40px;
    width: 500px;
    border: 1px solid #00bbf9;
    margin-bottom: 15px;
    display: block;
    margin-top: 5px;
    outline: none;
    font-family: inherit;
    padding-left: 20px;
    ::placeholder {
      color: gray;
      opacity: 0.5;
      font-size: 16px;
    }
  }

  > div > label {
    padding-left: 10px;
  }

  > div > span > label {
    padding-left: 10px;
    font-family: 'Baloo Tammudu 2', cursive;
    margin-bottom: 5px;
    line-height: 1.5;
  }

  > div > span > label > input {
    border-radius: 25px;
    height: 40px;
    width: 200px;
    border: 1px solid #00bbf9;
    display: block;
    outline: none;
    margin-bottom: 10px;
    font-family: inherit;
    padding-left: 20px;
    padding-top: 10px;
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

const totalCostStyles = css`
  font-size: 30px;
  font-weight: bold;
  color: gray;
  vertical-align: middle;
  font-family: 'Baloo Tammudu 2', cursive;
  padding-bottom: 0px;
`;

const total = css`
  font-weight: bold;
  font-family: 'Baloo Tammudu 2', cursive;
  font-size: 30px;
  vertical-align: middle;
  padding-bottom: 0px;
`;

const checkoutButton = css`
  margin-bottom: 20px;
  padding-bottom: 60px;
  margin-right: 50px;
  > a {
    background-color: #00bbf9;
    width: 400px;
    color: #fff;
    padding: 8px 20px;
    border-radius: 25px;
    border: none;
    font-size: 30px;
    float: right;
    text-align: center;
    align-content: center;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    :hover {
      background-color: #6c0075;
    }
    :active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
`;

export default function Checkout(props) {
  function getProductById(productId) {
    return props.products.find((product) => product.id === parseInt(productId));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPrice, setTotalPrice] = useState(
    Object.entries(getBasketCookieValue())
      .map(([id, quantity]) => getProductById(id).price * quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
  );

  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Checkout</title>
      </Head>
      <NavMenu shoppingCart={props.shoppingCart} />
      <div css={checkoutHeading}>
        <span>
          <h1 data-cy="checkout-page-h1">Checkout</h1>
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
                <th>Price</th>
              </tr>
              {Object.entries(getBasketCookieValue()).map(
                ([productId, quantity]) => (
                  <tr
                    key={productId}
                    data-cy={`checkout-page-product-${productId}`}
                  >
                    <td data-cy="checkout-page-product-name">
                      {getProductById(productId).productName}
                    </td>

                    <td>{quantity}</td>
                    <td>
                      &#x20AC;
                      {(getProductById(productId).price * quantity).toFixed(2)}
                    </td>
                  </tr>
                ),
              )}
              <tr>
                <td css={total}>Total cost:</td>
                <td colspan="2" css={totalCostStyles}>
                  &#x20AC; {totalPrice}
                </td>
              </tr>
            </table>
          </div>
          <div>
            <div css={detailsForm}>
              <h3 data-cy="checkout-page-h3">Billing and Shipping Details</h3>
              <p>Please fill in all required (*) fields.</p>
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
                <span css={marginRight}>
                  <input placeholder="House/ Apt Number" />
                </span>
                <span css={marginRight}>
                  <input placeholder="Zip Code" />
                </span>
              </div>
              <div>
                <input placeholder="Town / City" />
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
              <br />
              <h3>Payment Details</h3>
              <p>Please enter card details in the fields below.</p>
              <div>
                <label>
                  Name on the card:
                  <input placeholder="eg. Max Musterman" />
                </label>
              </div>
              <div>
                <label data-cy="checkout-page-label">
                  Credit card number:
                  <input
                    data-cy="checkout-page-input"
                    placeholder="eg. 1234 5678 9101 1121"
                  />
                </label>
              </div>
              <div>
                <span css={marginRight}>
                  <label>
                    Date of Expiry:
                    <input placeholder="eg. 12/22" />
                  </label>
                </span>
                <span css={marginRight}>
                  <label>
                    CVV code:
                    <input placeholder="eg. 123" />
                  </label>
                </span>
              </div>
              <div css={checkoutButton}>
                <Link href="/products/thankYouPage">
                  <a data-cy="checkout-page-purchase-button">Purchase</a>
                </Link>
              </div>
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
