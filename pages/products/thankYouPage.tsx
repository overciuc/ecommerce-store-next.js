import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';

config.autoAddCss = false;

const contactUsHeading = css`
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

const contactUsPage = css`
  margin-top: 20px;
  margin-bottom: 100px;
  max-width: 1300px;
  width: 100%;
  padding: 20px 30px;
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

const contactPageGrid = css`
  max-width: 1300px;
  justify-content: space-between;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  grid-gap: 50px;
  list-style-type: none;
  margin-bottom: 50px;
  margin-top: 50px;

  > div > button {
    background-color: #00bbf9;
    color: #fff;
    padding: 10px 20px;
    float: left;
    border-radius: 25px;
    border: none;
    font-size: 24px;
    cursor: pointer;
    margin-left: 10px;
    :hover {
      background-color: #6c0075;
    }
  }

  > div > p {
    text-align: left;
    font-family: 'Baloo Tammudu 2', cursive;
    line-height: 1.5;
    color: gray;
  }

  > div > span {
    margin-left: 0;
    margin-right: 40px;
    text-align: left;
  }
  > div > span > a {
    color: #ff0000;
    font-family: 'Baloo Tammudu 2', cursive;
    text-align: left;
  }
`;

const contactImage = css`
  max-width: 650px;
  max-height: 500px;
  justify-content: right;
  padding: 20px;
  padding-right: 30px;
  padding-left: 30px;
  margin: auto;
  float: right;
  box-shadow: 1px 1px 15px gray; ;
`;

const redBackgroundHeading = css`
  text-align: center;
  background-color: red;
  background-size: 10% 10%;
  transform: rotate(-2deg);
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 10px;
  width: 20%;
  margin-left: 0;
  margin-right: auto;
  margin-top: 10px;
`;

const titleStyles = css`
  display: flex;
  justify-content: left;
  font-size: 40px;
  font-weight: bold;
  color: gray;
  margin-bottom: 10px;
  font-family: 'Gorditas', cursive;
  margin-top: 10px;
  text-align: left;
`;

const checkoutButton = css`
  margin-top: 40px;
  > a {
    background-color: #00bbf9;
    color: #fff;
    padding: 10px 20px;
    border-radius: 25px;
    border: none;
    font-size: 24px;
    text-align: center;
    align-content: center;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    :hover {
      background-color: #6c0075;
    }
  }
`;

export default function ContactUs(props: any) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Success!</title>
      </Head>
      <NavMenu />
      <div css={contactUsHeading}>
        <span>
          <h1 data-cy="thank-you-page-h1">Thank You</h1>
        </span>
      </div>
      <section css={contactUsPage}>
        <div>
          <Link href="/">
            <a>Home &nbsp;&nbsp; &#62; </a>
          </Link>
          <Link href="/products/allProductsPage">
            <a>&nbsp;&nbsp;Shop &nbsp;&nbsp; &#62; </a>
          </Link>
          <span>&nbsp;&nbsp; Thank you</span>
        </div>
        <div css={contactPageGrid}>
          <div>
            <img
              src="/images/thankYouImage.jpg"
              css={contactImage}
              alt="A cat with balloons"
            />
          </div>
          <div>
            <h2 css={redBackgroundHeading}>Success!</h2>
            <h1 css={titleStyles}>
              Thank you for your <br />
              purchase
            </h1>
            <p>
              Your purchase has been successful. <br />
              Please see your receipt and purchase <br />
              history in the links below.
            </p>
            <span>
              <Link href="/products/allProductsPage">
                <a>Purchase Receipt</a>
              </Link>
            </span>
            <span>
              <Link href="/products/allProductsPage">
                <a>Purchase History</a>
              </Link>
            </span>
            <div css={checkoutButton}>
              <Link href="/products/allProductsPage">
                <a>Back to Shop</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
