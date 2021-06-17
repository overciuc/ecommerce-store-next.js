import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { getBasketCookieValue } from '../util/cookies';

config.autoAddCss = false;

const logo = css`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const containerStyles = css`
  margin-top: -25px;
  height: 200px;
  width: 100%;
  background-color: #249af0;
  z-index: -10;
`;

const navigationMenu = css`
  display: flex;
  position: relative;
  max-width: 1300px;
  justify-content: center;
  margin-top: 20px;
  padding: 55px 15px;
  margin-left: 200px;
  margin-right: 20px;
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

  > a {
    border: none;
    background-color: transparent;
    color: #fff;
    margin-right: 30px;
    text-decoration: none;

    :hover {
      border-bottom: 0.5px solid;
    }
  }
`;

const logoStyles = css`
  margin-right: 200px;
  color: #fff;
  font-family: 'Gorditas', cursive;
  font-size: 30px;
  margin-top: -20px;
`;

const faIconStyle = css`
  font-size: 20px;
`;

const marginLeft = css`
  margin-left: 200px;
`;

export default function NavMenu() {
  const [shoppingCart, setShoppingCart] = useState(getBasketCookieValue);

  return (
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
            <a data-cy="nav-menu-toys">Toys</a>
          </Link>
        </span>

        <span css={[navBarButtonStyle, marginLeft]}>
          <Link href="/products/basket">
            <a data-cy="nav-menu-shoppingCart">
              <FontAwesomeIcon icon={faShoppingBasket} css={faIconStyle} />
            </a>
            {setShoppingCart().quantity}
          </Link>
          <Link href="#1">
            <a>
              Search <FontAwesomeIcon icon={faSearch} css={faIconStyle} />
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
}
