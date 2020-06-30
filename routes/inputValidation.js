const { check, validationResult } = require('express-validator');

exports.postVenueValidation = [
  check('venue_name', 'venue_name is required').exists()
]; // express venue creation validation.

exports.postAdminValidation = [
  check('admin_email', 'Please provide a valid email address').isEmail(),
  check('venue_id', 'venue_id is required').exists()
]; // express user creation validation.

exports.postProductValidation = [
  check('venue_id', 'venue_id is required').isInt(),
  check('product_name', 'product_name is required').exists(),
  check('product_type', 'product_type is required').exists(),
  check('product_description', 'product_description is required').exists(),
  check('product_price', 'product_price is required').isFloat()
]; // express product validation.

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
