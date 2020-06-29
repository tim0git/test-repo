exports.up = (knex) => {
  return knex.schema.createTable('admins', (admins) => {
    admins.increments('admin_id').primary();
    admins.integer('venue_id').references('venues.venue_id').notNullable();
    admins.string('admin_email');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('admins');
};
