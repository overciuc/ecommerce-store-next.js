import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Link from 'next/link';
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
    margin-bottom: 20px;
    font-family: 'Baloo Tammudu 2', cursive;
  }
  > div > span {
    color: red;
    font-family: 'Baloo Tammudu 2', cursive;
  }
`;

const ourTeamSection = css`
  margin-top: 20px;
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
    transform: rotate(-2deg);
    text-align: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 10px;
    width: 10%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`;

const ourTeamGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(1, 400px);
  align-items: center;
  grid-gap: 30px;
  padding: 20px 40px;
  text-align: center;
  list-style-type: none;

  > div {
    width: 400px;

    min-height: 300px;
    border: 5px dashed plum;
    border-radius: 20px;
    padding: 30px 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: transform 0.3s ease;
    :hover {
      transform: translate(0, -10px);
    }
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

const teamMemebersText = css`
  text-align: left;
  color: gray;
  font-size: 16px;
  width: 350px;
  margin-left: 10px;
`;

const blogLink = css`
  display: block;
  text-align: left;
  color: #20a314;
  font-size: 16px;
  width: 350px;
  margin-left: 10px;
  cursor: pointer;
`;

const line = css`
  width: 350px;
  border-top: 1px solid gray;
  margin: auto;
  opacity: 50%;
`;

const ourTeamImageStyle = css`
  max-width: 200px;
  max-height: 150px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
`;

const floatLeft = css`
  float: left;
  margin-left: 10px;
  font-family: 'Baloo Tammudu 2', cursive;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  margin-top: 5px;
`;

const floatRight = css`
  float: right;
  margin-right: 10px;
  color: red;
  font-family: 'Baloo Tammudu 2', cursive;
  font-size: 14px;
  margin-top: 10px;
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
        <section css={ourTeamSection}>
          <h2>Articles</h2>
          <h1>Things to Know and See</h1>
          <div css={ourTeamGrid}>
            <div>
              <div>
                <img
                  src="/images/bicycle.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Lobau Park</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/zebra.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Fun activities</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/rocket.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Playgrounds</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/party.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Where the Party at</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>

                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/daycare.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>All about daycare</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/images/produce.png"
                  alt="about"
                  css={ourTeamImageStyle}
                />
                <p>
                  <span css={floatLeft}>Local produce</span>
                  <span css={floatRight}>12.10.2020</span>
                </p>
                <hr css={line} />
                <p css={teamMemebersText}>
                  Lobau Park is a huge Nature Reserve that starts in the 2nd
                  district of Vienna. <br />A great day trip for the whole
                  family.
                </p>
                <Link href="#1">
                  <a css={blogLink}>Read More...</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </Layout>
  );
}
