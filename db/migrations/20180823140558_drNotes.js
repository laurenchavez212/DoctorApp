exports.up = function(knex, Promise) {
  return knex.schema.createTable("drNotes", (table) => {
    table.increments();
    table.text('content');
    table.integer('booking_id').references('id').inTable('booking');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("drNotes");
};
