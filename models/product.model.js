const knex = require('../db/connection.js');

exports.insertProduct = (
  venue_id,
  product_name,
  product_type,
  product_description,
  product_price,
  product_image
) => {
  return knex('products')
    .insert({
      venue_id,
      product_name,
      product_type,
      product_description,
      product_price,
      product_image
    })
    .returning('*');
};
