import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';
import {
  getBasketCookieValue,
  toggleAddedProductByProductId,
} from '../../util/cookies';

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

const productGrid = css`
  max-width: 1300px;
  justify-content: space-between;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 50px;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;

  > span {
    text-align: right;
    margin-left: 24px;
    width: 450px;
    padding: 20px 40px;
    display: block;
  }

  > span > img {
    padding: 20px;
    max-width: 500px;
    max-height: 500px;
    padding-right: 50px;
    text-align: center;
  }

  > span + span {
    text-align: left;
    padding-bottom: 50px;
  }
  > span > h1 {
    color: gray;
    font-size: 32px;
    margin-bottom: 20px;
    font-family: 'Gorditas', cursive;
  }

  > span > p {
    color: #f15bb5;
    font-size: 40px;
    margin-top: 8px;
    margin-bottom: 20px;
  }

  > span > p + p {
    font-size: 14px;
    color: gray;
  }

  > span > p + p > span > a {
    font-size: 14px;
    color: red;
    text-decoration: none;
  }

  > span > p + p > input {
    width: 50px;
    height: 30px;
    border: none;
    ::placeholder {
      opacity: 0.5;
      color: gray;
      padding-left: 10px;
    }
  }
  > span > button {
    background-color: #00bbf9;
    color: #fff;
    padding: 10px 20px;
    float: left;
    border-radius: 25px;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 10;
    :hover {
      background-color: #6c0075;
    }
    :active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
  > div {
    text-align: left;
  }
`;

const descriptionContainer = css`
  display: flex;
  position: relative;
  max-width: 1300px;
  width: 100%;
  justify-content: center;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 50px;

  > div > h5 {
    background-color: #9b5de5;
    height: 50px;
    color: #fff;
    padding-left: 20px;
    padding-top: 8px;
    font-size: 24px;
    border-radius: 15px;
  }

  > div p {
    padding-left: 20px;
    width: 98%;
    margin-top: -15px;
  }
`;

const euroSignSize = css`
  font-size: 25px;
`;

const counter = css`
  width: 100px;
  margin: 20px;
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

export default function SingleProduct(props) {
  const [generalPrice, setGeneralPrice] = useState(props.product.price);

  const [quantity, setQuantity] = useState(1);

  const [totalPrice, setTotalPrice] = useState(generalPrice);

  const [shoppingCart, setShoppingCart] = useState(getBasketCookieValue());

  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotalPrice((prevPrice) => prevPrice + generalPrice);
  }
  function decrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1);
    setTotalPrice((prevPrice) => prevPrice - generalPrice);
  }

  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>{props.product.productName}</title>
      </Head>
      <NavMenu />
      <div css={checkoutHeading}>
        <span>
          <h1>Product</h1>
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
          <span>&nbsp; Product</span>
        </div>

        <div css={productGrid}>
          <span>
            <img src={props.product.productImage} alt="product" />
          </span>
          <span>
            <h1 data-cy="product-page-h1">{props.product.productName}</h1>
            <p>
              <span css={euroSignSize}>&#x20AC; </span>
              {(props.product.price * quantity).toFixed(2)}

              <span css={counter}>
                <button
                  onClick={() => {
                    decrementQuantity();
                  }}
                >
                  -
                </button>
                <input
                  data-cy="product-page-input-field-value-2"
                  value={quantity}
                  min="1"
                  defaultValue={1}
                />

                <button
                  data-cy="product-page-button-+"
                  onClick={() => {
                    incrementQuantity();
                  }}
                >
                  +
                </button>
              </span>
            </p>
            <p>
              <span>
                Including 20% VAT, <a href="#1">plus shipping costs</a>
              </span>
            </p>
            <p>{props.product.productShortDescription}</p>

            <button
              data-cy="product-page-addToCart-button"
              onClick={() => {
                getBasketCookieValue();
                setShoppingCart(
                  toggleAddedProductByProductId(props.product.id, quantity),
                );
              }}
            >
              {/*
              {props.product.id in shoppingBasket
                ? 'Remove from Basket'
                : 'Add to Basket'}*/}
              Add to Basket
            </button>
          </span>
        </div>
      </section>
      <section css={descriptionContainer}>
        <div>
          <h5>Description:</h5>
          <p> {props.product.productDescription}</p>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query.productId;

  console.log('productId', productId);

  const { getProductById } = await import('../../util/database');

  const product = await getProductById(productId);

  return {
    props: {
      product: product,
    },
  };
}
