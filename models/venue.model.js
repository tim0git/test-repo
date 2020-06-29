const knex = require('../db/connection.js');

exports.insertVenue = (venue_name, venue_logo) => {
  return knex('venues').insert({ venue_name, venue_logo }).returning('*');
};
