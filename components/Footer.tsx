import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

config.autoAddCss = false;

const footerStyles = css`
  background-color: #249af0;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  z-index: 1;
  height: 300px;
  width: 100%;
`;

const footerDetails = css`
  display: flex;
  margin: auto 100px;

  > div {
    max-width: 1300px;
    justify-content: center;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
    grid-gap: 3rem;
    text-align: left;
    list-style-type: none;
    margin-top: 30px;
  }

  > div > div {
    padding-left: 10px;
    margin-top: 20px;
    align-items: center;
  }

  > div > div > h3 {
    color: #fff;
    font-family: 'Gorditas', cursive;
    font-size: 20px;
    margin-bottom: 20px;
    padding-top: 10px;
  }
  > div > div > span > p {
    color: #fff;
    font-size: 15px;
    margin-top: 50px;
  }

  > div > div > span > a {
    color: #fff;
    cursor: pointer;
    font-size: 15px;
  }
  > div > div > span > a + a {
    color: #fff;
    margin-left: 20px;
    font-size: 15px;
  }
  > div > div > span > h4 {
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  > div > div > ul {
    color: #fff;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    list-style-type: none;
    > li > a {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      margin-left: -35px;
      font-weight: normal;
    }
  }

  > div > div > input {
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    ::placeholder {
      color: gray;
      opacity: 0.7;
      padding-left: 15px;
    }
  }

  > div > div > button {
    width: 200px;
    height: 40px;
    border: none;
    background-color: #d11fc3;
    color: #fff;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

const faIconStyle = css`
  font-size: 20px;
`;

const logo = css`
  width: 50px;
  height: 50px;
  //vertical-align: middle;
  margin-right: 10px;
`;

export default function Footer() {
  return (
    <section css={footerStyles}>
      <div css={footerDetails}>
        <div>
          <div>
            <h3>
              <img src="/icon-192.png" alt="logo" css={logo} />
              Sprinkle
            </h3>
            <span>
              <p>
                Follow Us on Social Media
                <span role="img" aria-label="">
                  "😉"
                </span>
              </p>
              <a>
                <FontAwesomeIcon icon={faFacebook} css={faIconStyle} />
              </a>
              <a>
                <FontAwesomeIcon icon={faInstagram} css={faIconStyle} />
              </a>
              <a>
                <FontAwesomeIcon icon={faLinkedin} css={faIconStyle} />
              </a>
              <a>
                <FontAwesomeIcon icon={faTwitter} css={faIconStyle} />
              </a>
            </span>
          </div>
          <div>
            <h3>Vienna, Austria</h3>
            <span>
              <h4>
                123 Vienna Drive,
                <br />
                1010
              </h4>
              <a>
                email.us@example.com <br />
                +43669123456
              </a>
            </span>
          </div>
          <div>
            <h3>Our Store</h3>
            <ul>
              <li>
                <a href="../products/clothingPage">Clothing</a>
              </li>
              <li>
                <a href="../products/accessories">Accessories</a>
              </li>
              <li>
                <a href="../products/books">Books</a>
              </li>
              <li>
                <a href="../products/toys">Toys</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="../">Home</a>
              </li>
              <li>
                <a href="../about">About</a>
              </li>
              <li>
                <a href="../products/blog">Blog</a>
              </li>
              <li>
                <a href="../products/allProductPage">Shop</a>
              </li>
            </ul>
          </div>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
