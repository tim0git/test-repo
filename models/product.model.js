const knex = require('../db/connection.js');

exports.insertProducts = (
  venue_id,
  product_name,
  product_type,
  product_description,
  product_price,
  product_image
) => {
  return knex('products')
    .insert({
      product_name,
      product_type,
      product_description,
      product_price,
      product_image
    })
    .where('venue_id', '=', venue_id)
    .returning('*');
};
