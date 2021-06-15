exports.up = async function up(sql) {
  await sql`
		CREATE TABLE products (
  		id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  		product_name varchar(200) NOT NULL,
  		category varchar(50) NOT NULL,
			product_slug varchar(200) NOT NULL,
  		product_description text NOT NULL,
  		product_short_description text NOT NULL,
  		price float NOT NULL,
  		product_image varchar(500)
		);
	`;
};

exports.down = async function down(sql) {
  await sql`
		DROP TABLE products
	`;
};
