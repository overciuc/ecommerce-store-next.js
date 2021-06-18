import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';
import {
  getBasketCookieValue,
  removeProductFromShoppingCart,
  updateProductQuantityInCookie,
} from '../../util/cookies';

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
    font-size: 50px;
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
    margin-bottom: 20px;
    font-family: 'Baloo Tammudu 2', cursive;
  }
  > div > span {
    color: red;
    font-family: 'Baloo Tammudu 2', cursive;
  }
`;

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
  padding: 20px 30px;
  > table {
    border-collapse: collapse;
  }
`;

const tableStyles = css`
  width: 100%;
  > tr > th {
    padding: 15px;
    text-align: center;
    border: 1px solid rgba(255, 192, 203, 0.4);
  }

  > tr > td {
    text-align: left;
    padding: 15px;
    border: 1px solid rgba(255, 192, 203, 0.4);
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
  border: none;
  background-color: transparent;
  :hover {
    color: red;
  }
`;

const centerText = css`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-right: 20px;
  padding-left: 20px;
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
    background-color: #ffc0cb;
  }
`;

const checkoutButton = css`
  margin: auto;
  width: 1200px;
  > a {
    background-color: #00bbf9;
    color: #fff;
    padding: 10px 20px;
    border-radius: 25px;
    border: none;
    font-size: 24px;
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

const removeFormBorders = css`
  background-color: pink;
  > td {
    border-color: pink;
    font-weight: bold;
  }
`;

export default function Basket(props) {
  const [cookieBasketValue, setCookieBasketValue] =
    useState(getBasketCookieValue);

  // Product
  function getProductById(productId) {
    return props.products.find((product) => product.id === parseInt(productId));
  }

  // Quantity Array
  const [productQuantities, setProductQuantities] = useState(
    Array.from(Object.keys(getBasketCookieValue()), (x) => ({
      productId: x,
      quantity: getBasketCookieValue()[x],
    })),
  );

  const [totalPrice, setTotalPrice] = useState(
    Object.entries(getBasketCookieValue())
      .map(([id, quantity]) => getProductById(id).price * quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
  );

  function incrementQuantity(productId) {
    const newProductQuantities = productQuantities.map((product) => {
      if (productId === product.productId) {
        product.quantity += 1;
        updateProductQuantityInCookie(productId, product.quantity);
      }
      return product;
    });
    setProductQuantities(newProductQuantities);
    setTotalPrice((prevPrice) => prevPrice + getProductById(productId).price);
    props.setShoppingCart(getBasketCookieValue());
  }

  function decrementQuantity(productId) {
    const newProductQuantities = productQuantities.map((product) => {
      if (productId === product.productId) {
        product.quantity -= 1;
        updateProductQuantityInCookie(productId, product.quantity);
      }
      return product;
    });
    setProductQuantities(newProductQuantities);
    setTotalPrice((prevPrice) => prevPrice - getProductById(productId).price);
    props.setShoppingCart(getBasketCookieValue());
  }

  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Cart</title>
      </Head>
      <NavMenu shoppingCart={props.shoppingCart} />
      <div css={checkoutHeading}>
        <span>
          <h1 data-cy="basket-page-h1">Shopping Cart</h1>
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
          <span>&nbsp; Shopping Cart</span>
        </div>
        <div css={basketSection}>
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

              {Object.keys(cookieBasketValue).map((productId) => (
                <tr key={productId}>
                  <td>
                    <img
                      src={getProductById(productId).productImage}
                      alt="product"
                    />
                  </td>
                  <td>{getProductById(productId).productName}</td>
                  <td>{getProductById(productId).productShortDescription}</td>
                  <td>
                    <span css={counter}>
                      <button
                        onClick={() => {
                          decrementQuantity(productId);
                        }}
                      >
                        -
                      </button>
                      <input
                        data-cy="basket-page-input-field-value-3"
                        value={
                          productQuantities.find(
                            (product) =>
                              parseInt(productId) ===
                              parseInt(product.productId),
                          ).quantity
                        }
                      />
                      <button
                        data-cy="basket-page-increase-quantity-by-1"
                        onClick={() => {
                          incrementQuantity(productId);
                        }}
                      >
                        +
                      </button>
                    </span>
                  </td>
                  <td>
                    <span css={centerText}>
                      &#x20AC;
                      {(
                        getProductById(productId).price *
                        productQuantities.find(
                          (product) =>
                            parseInt(productId) === parseInt(product.productId),
                        ).quantity
                      ).toFixed(2)}
                    </span>
                  </td>
                  <td>
                    <button
                      data-cy="basket-page-button-delete"
                      css={deleteButtonStyle}
                      onClick={() => {
                        removeProductFromShoppingCart(productId);
                        setCookieBasketValue(getBasketCookieValue());
                        props.setShoppingCart(getBasketCookieValue());
                      }}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
              <tr css={removeFormBorders}>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>Total cost:</td>
                <td>&#x20AC;{totalPrice.toFixed(2)}</td>
              </tr>
            </table>
          </div>
          <div css={checkoutButton}>
            <Link href="/products/checkout">
              <a data-cy="basket-page-button-checkout">Checkout</a>
            </Link>
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
