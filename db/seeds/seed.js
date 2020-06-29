const { adminsData, productsData, venuesData } = require('../data/index');

exports.seed = knex => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex('venues').insert(venuesData))
    .then(() => knex('admins').insert(adminsData))
    .then(() => knex('products').insert(productsData));
};
