const productRouter = require('express').Router();
const { postProducts } = require('../controllers/product.controller');
const { postProductValidation, validator } = require('./inputValidation');

productRouter.route('/').post(postProductValidation, validator, postProducts);

module.exports = productRouter;
