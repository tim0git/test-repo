exports.up = knex => {
  return knex.schema.createTable('products', products => {
    products.increments('product_id').primary().notNullable();
    products.integer('venue_id').references('venues.venue_id');
    products.string('product_name').notNull();
    products.string('product_type').notNull();
    products.string('product_description', 500).notNull();
    products.decimal('product_price', 4, 2).notNull();
    products.string('product_image');
  });
};

exports.down = knex => {
  return knex.schema.dropTable('products');
};
