const venueRouter = require('express').Router();
const { postVenue } = require('../controllers/venue.controller');

venueRouter.route('/').post(postVenue);

module.exports = venueRouter;
