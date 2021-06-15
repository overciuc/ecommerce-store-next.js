import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

dotenvSafe.config();

const sql = postgres();

export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return products.map((product) => camelcaseKeys(product));
}

export async function getProductById(id) {
  const products = await sql`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
    `;
  return products.map((product) => camelcaseKeys(product))[0];
}
