import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-multi-carousel/lib/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NavMenu from '../components/NavMenu';

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
    margin-bottom: 50px;
    font-family: 'Baloo Tammudu 2', cursive;
  }
  > div > span {
    color: red;
    font-family: 'Baloo Tammudu 2', cursive;
  }
`;

const aboutGridSection = css`
  margin-top: 20px;
  margin-bottom: 100px;
`;
const aboutGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(1, 400px);
  align-items: center;
  grid-gap: 1rem;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;
  background-color: #fff;

  > div {
    width: 400px;
    height: 400px;
  }

  > div > p {
    text-align: left;
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 16px;
    line-height: 1.2;
    width: 85%;
    color: #484848;
  }
`;

const imageStyle = css`
  width: 300px;
  height: 400px;
  text-align: center;
  border: 1px solid purple;
  margin: auto;
`;

const leftColumnHeader = css`
  > h2 {
    background-color: red;
    background-size: 10% 10%;
    transform: rotate(-2deg);
    text-align: center;
    color: #fff;
    font-size: 20px;
    margin: auto;
    border-radius: 10px;
    padding: 10px 10px;
    width: 80%;
    margin-bottom: 40px;
    margin-left: 0;
  }

  > h1 {
    text-align: left;
    font-size: 40px;
    color: gray;
    font-family: 'Gorditas', cursive;
    font-weight: bold;
    margin: 30px auto;
  }
`;

const timeTable = css`
  display: block;
  background-color: rgba(254, 228, 64, 0.2);
  width: 350px;
  height: 350px;
  padding: 10px 30px;
  justify-content: center;
  border-radius: 15px;

  > div {
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 20px;
    color: #484848;
    line-height: 1.5;
  }

  > div > span {
    font-size: 10px;
  }

  > div > h2 {
    font-family: 'Baloo Tammudu 2', cursive;
    text-align: center;
    margin-bottom: 10px;
  }

  > a {
    background-color: #00bbf9;
    color: #fff;
    padding: 10px 20px;
    float: left;
    border-radius: 25px;
    border: none;
    font-size: 24px;
    margin-top: 20px;
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

const newsletterBackground = css`
  width: 100%;
  height: 200px;
  z-index: -1;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #15ff004d;
  align-items: center;
  padding-top: 20px;

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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    grid-gap: 3rem;
    padding: 20px 40px;
    text-align: center;
    list-style-type: none;
    z-index: 20;
    position: relative;

    > div {
      font-weight: bold;
      font-family: 'Baloo Tammudu 2', cursive;
      font-size: 30px;
      line-height: 1.2;
      color: #32355d;
    }
  }
`;

const ourTeamSection = css`
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
    margin-top: 10px;
  }
  > h2 {
    background-color: red;
    background-size: 10% 10%;
    transform: rotate(2deg);
    text-align: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 10px;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`;
const ourTeamGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(1, 400px);
  align-items: center;
  grid-gap: 1rem;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;

  > div {
    width: 400px;
    height: 400px;
  }

  > div > p {
    text-align: left;
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 16px;
    line-height: 1.2;
    width: 85%;
    color: #484848;
  }
`;
const floatLeft = css`
  float: left;
  margin-left: 30px;
  font-family: 'Baloo Tammudu 2', cursive;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const floatRight = css`
  float: right;
  margin-right: 30px;
  color: red;
  font-family: 'Baloo Tammudu 2', cursive;
  font-size: 16px;
`;

const teamMemebersText = css`
  text-align: left;
  color: gray;
  font-size: 18px;
  width: 350px;
  margin-left: 30px;
`;

const line = css`
  width: 350px;
  border-top: 1px solid gray;
  margin: auto;
  opacity: 50%;
`;

const ourTeamImageStyle = css`
  width: 350px;
  height: 250px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  :hover {
    transform: translate(0, -10px);
  }
`;

const brandsSection = css`
  width: 100%;
  height: 150px;
  z-index: -1;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #f9f7f5;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderContainer = css`
  display: flex;
  position: relative;
  max-width: 1300px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const carouselDivStyle = css`
  display: block;
  width: 300px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 20px;
  margin-bottom: 50px;
  margin-top: 20px;
  justify-content: center;
  text-align: center;

  > img {
    margin-left: auto;
    margin-right: auto;
    max-width: 250px;
    max-height: 100px;
    padding: 20px 30px;
    filter: alpha(opacity=90);
  }
`;
const pageContainer = css`
  max-width: 1300px;
  width: 100%;
  justify-content: center;
  margin: auto;
`;

export default function About(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>About</title>
      </Head>
      <NavMenu shoppingCart={props.shoppingCart} />
      <div css={checkoutHeading}>
        <span>
          <h1>About Us</h1>
        </span>
      </div>

      <section css={checkoutPage}>
        <div>
          <Link href="/">
            <a>Home &nbsp; &#62; </a>
          </Link>
          <span>&nbsp; About</span>
        </div>
        <div css={aboutGridSection}>
          <div css={aboutGrid}>
            <div css={leftColumnHeader}>
              <h2>E-COMMERCE SPRINKLE</h2>
              <h1>
                Who We Are, <br /> And What We Do
              </h1>
              <p>
                Sprinkle is a small company who love anything related to
                children. May it be toys, clothes, books, adventures, events and
                so on.
                <br />
                <br />
                Anything is possible when you are a kid and our team here at
                Sprinkle will do our best to provide you with interesting
                products and information regarding events and activities for
                kids in the city of Vienna, Austria and nearby surroundings.
              </p>
            </div>
            <div>
              <img
                src="/images/aboutUsPhoto.jpeg"
                alt="about"
                css={imageStyle}
              />
            </div>
            <div css={timeTable}>
              <div>
                <h2>Working Hours</h2>
              </div>
              <div>
                Monday&nbsp;&nbsp;
                <span>
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . .
                </span>
                &nbsp;&nbsp;9AM - 6PM
              </div>
              <div>
                Tuesday&nbsp;&nbsp;
                <span>
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . .
                </span>
                &nbsp;&nbsp;9AM - 6PM
              </div>
              <div>
                Wednesday&nbsp;&nbsp;
                <span>
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . .
                </span>
                &nbsp;&nbsp;9AM - 6PM
              </div>
              <div>
                Thursday&nbsp;&nbsp;
                <span>
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . .
                </span>
                &nbsp;&nbsp;9AM - 6PM
              </div>
              <div>
                Friday&nbsp;&nbsp;
                <span>
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . .
                </span>
                &nbsp;&nbsp;9AM - 6PM
              </div>
              <div>
                Saturday&nbsp;&nbsp;
                <span>
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . .
                </span>
                &nbsp;&nbsp;9AM - 4PM
              </div>
              <Link href="/products/contact">
                <a>Get in Touch</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div css={newsletterBackground}>
        <section>
          <div>100% Customer Satisfaction</div>
          <div>Numerous local brands</div>
          <div>Wide range of products</div>
          <div>Fast delivery</div>
        </section>
      </div>

      <section css={ourTeamSection}>
        <h2>MEET OUR TEAM</h2>
        <h1>People Behind Sprinkle</h1>
        <div css={ourTeamGrid}>
          <div>
            <div>
              <img src="/images/olga.png" alt="about" css={ourTeamImageStyle} />
              <p>
                <span css={floatLeft}>Olga</span>
                <span css={floatRight}>The Creator</span>
              </p>
              <hr css={line} />
              <p css={teamMemebersText}>
                The visual designer behind Sprinkle Online Shop for Kids.
                <br />
                Spends her free time outdoors with family and friends. Always
                looking for new things to inspire future projects.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/images/george.jpg"
                alt="about"
                css={ourTeamImageStyle}
              />
              <p>
                <span css={floatLeft}>George</span>
                <span css={floatRight}>The Brains</span>
              </p>
              <hr css={line} />
              <p css={teamMemebersText}>
                The Brains behind Sprinkle Online Shop for Kids. <br />
                Spends his free time outdoors with family and friends. Always
                looking for new things to inspire future projects.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/images/nastja.png"
                alt="about"
                css={ourTeamImageStyle}
              />
              <p>
                <span css={floatLeft}>Anastasia</span>
                <span css={floatRight}>The Inspiration</span>
              </p>
              <hr css={line} />
              <p css={teamMemebersText}>
                The Ispiration for Sprinkle Online Shop for Kids. <br />
                Spends her free time outdoors with family and friends. Always
                being a fun little rascal and looking for ways to misbehave.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div css={brandsSection}>
        <section css={pageContainer}>
          <div>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={props.deviceType !== 'mobile' ? true : false}
              autoPlaySpeed={5000}
              keyBoardControl={false}
              customTransition="all .5"
              transitionDuration={2500}
              containerClass={sliderContainer}
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div css={carouselDivStyle}>
                <img src="/images/avengers_logo.png" alt="Avengers Logo" />
              </div>

              <div css={carouselDivStyle}>
                <img src="/images/nintendo_logo.png" alt="Nintendo Logo" />
              </div>

              <div css={carouselDivStyle}>
                <img src="/images/lego_logo.png" alt="Lego Logo" />
              </div>

              <div css={carouselDivStyle}>
                <img src="/images/starwars_logo.png" alt="Star Wars Logo" />
              </div>

              <div css={carouselDivStyle}>
                <img
                  src="/images/harrypotter_logo.png"
                  alt="Harry Potter Logo"
                />
              </div>

              <div css={carouselDivStyle}>
                <img src="/images/barbie_logo.png" alt="Barbie Logo" />
              </div>

              <div css={carouselDivStyle}>
                <img src="/images/disney_logo.png" alt="Walt Disney Logo" />
              </div>

              <div css={carouselDivStyle}>
                <img src="/images/zara_logo.png" alt="Zara Logo" />
              </div>

              <div css={carouselDivStyle}>
                <img src="/images/desigual_logo.png" alt="Desigual Logo" />
              </div>
            </Carousel>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
}
