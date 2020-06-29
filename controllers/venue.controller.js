const { insertVenue } = require('../models/venue.model');

exports.postVenue = (req, res, next) => {
  const { venue_name, venue_logo } = req.body;

  insertVenue(venue_name, venue_logo)
    .then(([venue]) => {
      res.status(201).send({ venue });
    })
    .catch(next);
};
