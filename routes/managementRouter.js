const managementRouter = require('express').Router();
const { postAdmin } = require('../controllers/management.controller');

managementRouter.route('/').post(postAdmin);

module.exports = managementRouter;
