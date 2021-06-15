import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

type Product = {
  id: number;
  productName: string;
  image: string;
};

type Props = {
  products: Product[];
};

const listStyles = css`
  list-style-type: none;

  > li > span > a {
    cursor: pointer;
  }
`;

export default function Products(props: Props) {
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

export async function getServerSideProps() {
  const { getProducts } = await import('../../util/database');

  const products = await getProducts();

  console.log('products', products);

  return {
    props: {
      products: products,
    },
  };
}
