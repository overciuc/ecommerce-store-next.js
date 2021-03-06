import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  display: flex;
  padding: 20px 15px;
  background-color: #249af0;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
    font-size: 14px;
    :hover {
      color: greenyellow;
    }
  }
  a + a {
    margin-left: 15px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    :hover {
      text-decoration: #fff;
    }
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products/allProductsPage">
        <a data-cy="header-shop-link">Shop</a>
      </Link>
      <Link href="/blog">
        <a data-cy="header-blog-link">Blog</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </header>
  );
}
