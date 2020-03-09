exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl
      .text("email")
      .unique()
      .notNullable();
    tbl.text("password").notNullable();
    tbl.boolean("active").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
