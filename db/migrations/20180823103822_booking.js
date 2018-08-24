
exports.up = function(knex, Promise) {
  return knex.schema.createTable("booking", (table)=>{
    table.increments();
    table.string("name");
    table.string('date');
    table.string('reason');
    table.text("details");
    table.integer('doctor_id').references('id').inTable('doctor');
    table.string('status').defaultTo('unconfirmed');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("booking");
};
