exports.up = (knex) => {
  return knex.schema.createTable('venues', (venues) => {
    venues.increments('venue_id').primary();
    venues.string('venue_name').notNull();
    venues.string('venue_logo');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('venues');
};
