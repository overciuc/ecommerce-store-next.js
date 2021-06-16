import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
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

const productGridSection = css`
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

export default function Blog(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Blog</title>
      </Head>
      <NavMenu />
      <div css={checkoutHeading}>
        <span>
          <h1>Our Blog</h1>
        </span>
      </div>

      <section css={checkoutPage}>
        <div>
          <Link href="/">
            <a>Home &nbsp; &#62; </a>
          </Link>
          <span>&nbsp; Blog</span>
        </div>
        <div css={blogPage}>
          <h1>Welcome to our Shop</h1>
          <div css={blogPost}>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </div>
      </section>

      <section css={productGridSection}>
        <h1>Welcome to our Shop</h1>
        <div>
          <img src="/images/aboutUsImage.jpeg" alt="Blog" />
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
