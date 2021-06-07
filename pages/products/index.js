import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const listStyles = css`
  list-style-type: none;

  > li > span > a {
    cursor: pointer;
  }
`;

// Props will come from getServerSide props object
// below
export default function Products(props) {
  console.log('props', props);
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>

      <h1>Products</h1>
      <ul css={listStyles}>
        {props.products.map((product) => (
          <li key={`product-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <a>
                <span>{product.image}</span>
                <span>{product.productName}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// Code written inside of getServerSideProps
// will ONLY be run on the server
//
// This allows you to do things like:
// - access the filesystem using fs / node:fs
// - read from a database
export async function getServerSideProps() {
  // This will cause an error (you cannot
  // import like this in a function):
  //
  // import { users } from '../../util/database';
  /*
  const { products } = await import('../../util/database');

  // This console.log doesn't show up in the browser
  //
  // It will ONLY show up in Node.js (because this
  // code is ONLY running on the server)
  console.log('products', products);
*/

  const { /* products */ getProducts } = await import('../../util/database');

  const products = await getProducts();

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
