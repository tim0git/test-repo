const managementRouter = require('express').Router();
const { postAdmin } = require('../controllers/management.controller');
const { postAdminValidation, validator } = require('./inputValidation');

managementRouter.route('/').post(postAdminValidation, validator, postAdmin);

module.exports = managementRouter;
