const { insertProduct } = require('../models/product.model');

exports.postProduct = (req, res, next) => {
  const {
    venue_id,
    product_name,
    product_type,
    product_description,
    product_price,
    product_image
  } = req.body;
  insertProduct(
    venue_id,
    product_name,
    product_type,
    product_description,
    product_price,
    product_image
  )
    .then(([product]) => {
      res.status(201).send({ product });
    })
    .catch(next);
};
