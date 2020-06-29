const knex = require('../db/connection.js');

exports.insertAdmin = (admin_email, venue_id) => {
  return knex('admins').insert({ admin_email, venue_id }).returning('*');
};
