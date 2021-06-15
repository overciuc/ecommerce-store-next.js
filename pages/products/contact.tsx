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
  max-width: 1500px;
  justify-content: space-between;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 1rem;
  text-align: center;
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
`;

const contactImage = css`
  max-width: 600px;
  max-height: 650px;
  justify-content: center;
  padding: 20px;
  padding-right: 20px;
  margin-right: 40px;
  margin: auto;
`;

const formContainer = css`
  display: block;
  max-width: 650px;
  width: 100%;
  justify-content: center;
  margin: auto;
  text-align: left;

  > div {
    width: 100%;
    margin: auto;
    margin-top: 20px;

    display: block;
  }

  > div > input {
    border-radius: 25px;
    height: 50px;
    width: 500px;
    border: 1px solid #00bbf9;
    margin-bottom: 10px;
    display: block;
    margin-top: 25px;
    outline: none;
    font-family: inherit;
    padding-left: 20px;
    ::placeholder {
      color: gray;
      opacity: 0.5;
      font-size: 16px;
    }
  }

  > div > textarea {
    width: 500px;
    border-radius: 25px;
    border: 1px solid #00bbf9;
    align-items: center;
    height: 120px;
    display: block;
    margin: 25px 0;
    outline: none;
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
const redBackgroundHeading = css`
  text-align: center;
  background-color: red;
  background-size: 10% 10%;
  transform: rotate(-2deg);
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 10px;
  width: 40%;
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
`;

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <NavMenu />
      <div css={contactUsHeading}>
        <span>
          <h1>Contact Us</h1>
        </span>
      </div>
      <section css={contactUsPage}>
        <div>
          <Link href="/">
            <a>Home &nbsp;&nbsp; &#62; </a>
          </Link>
          <span>&nbsp;&nbsp; Contact</span>
        </div>
        <div css={contactPageGrid}>
          <div>
            <img
              src="/images/cuteCat.jpg"
              css={contactImage}
              alt="A cat with balloons"
            />
          </div>
          <div>
            <h2 css={redBackgroundHeading}>Have a Question?</h2>
            <h1 css={titleStyles}>Send Us a Message</h1>
            <p>
              Dont be shy, Just tell us about yourself and we’ll figure <br />
              out the best option for you or your company
            </p>

            <form css={formContainer}>
              <div>
                <input
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                />

                <input placeholder="Last Name" id="lastName" name="lastName" />
              </div>

              <div>
                <textarea
                  placeholder="Your message here"
                  id="messageArea"
                  name="messageArea"
                />
              </div>
            </form>
            <button>Send Message</button>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
