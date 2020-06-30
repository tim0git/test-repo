const venueRouter = require('express').Router();
const { postVenue } = require('../controllers/venue.controller');
const { postVenueValidation, validator } = require('./inputValidation');

venueRouter.route('/').post(postVenueValidation, validator, postVenue);

module.exports = venueRouter;
