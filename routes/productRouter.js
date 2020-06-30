const productRouter = require('express').Router();
const { postProduct } = require('../controllers/product.controller');
const { postProductValidation, validator } = require('./inputValidation');

productRouter.route('/').post(postProductValidation, validator, postProduct);

module.exports = productRouter;
