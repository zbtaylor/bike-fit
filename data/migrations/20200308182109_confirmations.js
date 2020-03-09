exports.up = function(knex) {
  return knex.schema.createTable("confirmations", tbl => {
    tbl.increments("id");
    tbl.text("hash");
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("confirmations");
};
