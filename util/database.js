import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();
dotenvSafe.config();

// const sql = postgres();

function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres();
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

const sql = connectOneTimeToDatabase();

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
