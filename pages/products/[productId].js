import 'react-multi-carousel/lib/styles.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import NavMenu from '../../components/NavMenu';
import {
  getBasketCookieValue,
  toggleAddedProductByProductId,
} from '../../util/cookies';

const pageContainer = css`
  max-width: 1300px;
  width: 100%;
  justify-content: center;
  margin: auto;
`;

const productGrid = css`
  max-width: 1300px;
  justify-content: space-between;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 1rem;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;

  > span {
    text-align: right;
    margin-left: 24px;
    width: 400px;
    padding: 20px 40px;
    display: block;
  }

  > span > img {
    padding: 20px;

    max-width: 300px;
    max-height: 300px;

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderContainer = css`
  display: flex;
  position: relative;
  max-width: 1300px;
  width: 100%;
  justify-content: space-between;
`;

const carouselDivStyle = css`
  display: block;
  width: 300px;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px #a8a8a8;
  padding: 15px 20px;
  margin-bottom: 50px;
  margin-top: 50px;
  background-color: #fff;
  justify-content: center;
  text-align: center;
  > img {
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    max-width: 150px;
    max-height: 150px;
    margin-top: 15px;
  }

  > p {
    text-align: center;
  }

  > h4 {
    text-align: center;
    font-family: 'Gorditas', cursive;
  }
`;

const bottomMargin = css`
  margin-bottom: 50px;
`;

const headingStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Gorditas', cursive;
  color: #9b5de5;
  font-size: 40px;
  padding-top: 30px;
`;

const carouselBG = css`
  background-color: rgba(254, 228, 64, 0.5);
  width: 100%;
  height: 600px;
  z-index: -1;
`;

export default function SingleProduct(props) {
  const [addToBasket, setAddToBasket] = useState(getBasketCookieValue());
  return (
    <Layout>
      <Head>
        <title>{props.product.productName}</title>
      </Head>
      <NavMenu />

      <section css={productGrid}>
        <span>
          <img src={props.product.image} alt="product" />
        </span>
        <span>
          <h1>{props.product.productName}</h1>
          <p>{props.product.price}</p>
          <p>
            <span>
              Including 20% VAT, <a href="#1">plus shipping costs</a>
            </span>
          </p>
          <p>{props.product.short_description}</p>
          <button
            onClick={() => {
              setAddToBasket(toggleAddedProductByProductId(props.product.id));
            }}
          >
            {addToBasket.includes(props.product.id)
              ? 'Remove from basket'
              : 'Add to basket'}
          </button>
        </span>
      </section>
      <section css={descriptionContainer}>
        <div>
          <h5>Description:</h5>
          <p> {props.product.description}</p>
        </div>
      </section>

      <div css={carouselBG}>
        <section css={pageContainer}>
          <h1 css={headingStyle}>Related Products</h1>
          <div css={bottomMargin}>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={props.deviceType !== 'mobile' ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass={sliderContainer}
              removeArrowOnDeviceType={['tablet', 'mobile']}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div css={carouselDivStyle}>
                <img src={props.product.image} alt="product" />
                <h4>{props.product.productName}</h4>
                <p>{props.product.price}</p>
              </div>

              <div css={carouselDivStyle}>
                <img src={props.product.image} alt="product" />
                <h4>{props.product.productName}</h4>
                <p>{props.product.price}</p>
              </div>

              <div css={carouselDivStyle}>
                <img src={props.product.image} alt="product" />
                <h4>{props.product.productName}</h4>
                <p>{props.product.price}</p>
              </div>

              <div css={carouselDivStyle}>
                <img src={props.product.image} alt="product" />
                <h4>{props.product.productName}</h4>
                <p>{props.product.price}</p>
              </div>
            </Carousel>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // The name inside the square brackets of the filename
  // is inside of the `context.query` object
  const productId = context.query.productId;
  console.log('productId', productId);

  const { products } = await import('../../util/database');

  const product = products.find((p) => p.id === productId);

  return {
    props: {
      product: product,
    },
  };
}
