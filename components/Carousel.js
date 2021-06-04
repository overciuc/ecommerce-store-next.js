import 'react-multi-carousel/lib/styles.css';
import { css } from '@emotion/react';
import Carousel from 'react-multi-carousel';

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
  > img {
    align-content: center;
    margin-left: 30px;
    padding-top: 10px;
  }

  > p {
    text-align: center;
  }

  > h4 {
    text-align: center;
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

const pageContainer = css`
  max-width: 1300px;
  width: 100%;
  justify-content: center;
  margin: auto;
`;

export default function CarouselArea(props) {
  return (
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
  );
}

export async function getServerSideProps() {
  // This will cause an error (you cannot
  // import like this in a function):
  //
  // import { users } from '../../util/database';

  const { products } = await import('../util/database');

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
