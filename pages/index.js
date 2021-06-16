import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

config.autoAddCss = false;

const logo = css`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const containerStyles = css`
  margin-top: -25px;
  background-image: url('/kids_bg.png');
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  content: ' ';
  z-index: -10;
  width: 100%;
  height: 700px;
`;

const navigationMenu = css`
  display: flex;
  position: relative;
  max-width: 1300px;
  justify-content: center;
  margin-top: 20px;
  padding: 25px 15px;
  margin-left: 300px;
  margin-right: 100px;
  z-index: 1;
`;

const navBarButtonStyle = css`
  padding: 10px 0px 1px;
  border: none;
  background-color: transparent;
  color: #fff;
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 65px;

  > a {
    border: none;
    background-color: transparent;
    color: #fff;
    margin-right: 30px;
    text-decoration: none;
    margin-top: auto;
    :hover {
      border-bottom: 0.5px solid;
    }
  }
`;

const logoStyles = css`
  margin-right: 150px;
  color: #fff;
  font-family: 'Gorditas', cursive;
  font-size: 30px;
  padding-top: 30px;
`;
const faIconStyle = css`
  font-size: 20px;
`;

const marginLeft = css`
  margin-left: 200px;
`;

const paragraphSection = css`
  background-color: rgba(93, 189, 9, 0.2);
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  display: flex;

  position: relative;
  > div > p {
    font-size: 30px;
    color: #666964;
    text-align: center;
    margin: auto;
  }
  > div > h2 {
    background-color: red;
    background-size: 10% 10%;
    transform: rotate(2deg);
    text-align: center;
    color: #fff;
    font-size: 20px;
    margin: auto;
    border-radius: 10px;
    padding: 10px 10px;
    width: 50%;
    margin-bottom: 20px;
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
  grid-template-rows: repeat(auto-fit, minmax(3, 320px));
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

const newsletterBackground = css`
  width: 100%;
  height: 300px;
  z-index: -1;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #acd17a;

  ::before {
    background-image: url('/random.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    opacity: 0.2;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    content: '';
  }

  > section {
    max-width: 1300px;
    justify-content: center;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    grid-gap: 3rem;
    padding: 20px 40px;
    text-align: center;
    list-style-type: none;
    z-index: 20;
    position: relative;

    > h2 {
      font-size: 30px;
      color: #666964;
      font-family: 'Gorditas', cursive;
      letter-spacing: 1px;
      position: relative;
    }
    > span > input {
      position: relative;
      width: 400px;
      height: 40px;
      border-radius: 25px;
      border: none;
      ::placeholder {
        color: #666964;
        opacity: 0.75;
        padding-left: 20px;
      }
    }
    > span > button {
      width: 150px;
      height: 40px;
      border: none;
      background-color: #d11fc3;
      color: #fff;
      padding: 10px 20px;
      margin-left: 20px;
      border-radius: 25px;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export default function Home(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Home</title>
      </Head>

      <div css={containerStyles}>
        <div css={navigationMenu}>
          <h1 css={logoStyles}>
            <img src="/icon-192.png" alt="logo" css={logo} />
            Sprinkle
          </h1>
          <span css={navBarButtonStyle}>
            <Link href="/products/clothingPage">
              <a>Clothing</a>
            </Link>
            <Link href="/products/accessories">
              <a>Accessories</a>
            </Link>
            <Link href="/products/books">
              <a>Books</a>
            </Link>
            <Link href="/products/toys">
              <a>Toys</a>
            </Link>
          </span>
          <span css={[navBarButtonStyle, marginLeft]}>
            <Link href="/products/basket">
              <a>
                <FontAwesomeIcon icon={faShoppingBasket} css={faIconStyle} />
              </a>
            </Link>
            <Link href="/products/clothingPage">
              <a>
                Search <FontAwesomeIcon icon={faSearch} css={faIconStyle} />
              </a>
            </Link>
          </span>
        </div>
      </div>

      <section css={paragraphSection}>
        <div>
          <h2>SURPRISE YOUR LITTLE ONE</h2>
          <p>
            Welcome to your new all-in-one shop for kids.
            <br />
            A vast selection of accessories, toys, clothing and much more.
            <br />
            All just a few clicks away.
          </p>
        </div>
      </section>

      <section css={productGridSection}>
        <h1>New Arrivals</h1>
        <ul css={productGrid}>
          {props.products.map((product) => (
            <li key={`product-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                <a>
                  <span>
                    <Image
                      src={product.productImage}
                      alt="Product"
                      width={100}
                      height={100}
                    />
                  </span>
                  <span>
                    <h2>{product.productName}</h2>
                  </span>
                  <span>&#x20AC; {product.price}</span>
                </a>
              </Link>
              <span>
                <a href="#1">Add to basket</a>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div css={newsletterBackground}>
        <section>
          <h2>Subscribe to our Newsletter</h2>
          <span>
            <input type="text" placeholder="email@example.com" />
            <button>Subscribe</button>
          </span>
        </section>
      </div>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../util/database');

  const products = await getProducts();

  console.log('products', products);

  return {
    props: {
      products: products,
    },
  };
}
