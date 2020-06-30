const { insertProducts } = require('../models/product.model');

exports.postProducts = (req, res, next) => {
  const { venue_id } = req.params;
  const {
    product_name,
    product_type,
    product_description,
    product_price,
    product_image
  } = req.body;
  insertProducts(
    venue_id,
    product_name,
    product_type,
    product_description,
    product_price,
    product_image
  )
    .then(([products]) => {
      res.status(201).send({ products });
    })
    .catch(next);
};
