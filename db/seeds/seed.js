const { admins, products, venues } = require('../data/index');

exports.seed = knex => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex('venues').insert(venues))
    .then(() => knex('admins').insert(admins))
    .then(() => knex('products').insert(products));
};
