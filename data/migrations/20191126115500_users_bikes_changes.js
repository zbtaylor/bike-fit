exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments("id");
      tbl
        .text("email")
        .unique()
        .notNullable();
      tbl.text("password").notNullable();
    })
    .createTable("bikes", tbl => {
      tbl.increments("id");
      tbl
        .text("nickname")
        .unique()
        .notNullable();
      tbl.text("brand").notNullable();
      tbl.text("model").notNullable();
      tbl.decimal("weight").notNullable();
      tbl.text("type").notNullable();
      tbl.integer("reach").notNullable();
      tbl.integer("stack").notNullable();
      tbl.integer("wheelbase").notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("changes", tbl => {
      tbl.increments("id");
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.date("created_on").notNullable();
      tbl.date("last_edited").notNullable();
      tbl
        .integer("bike_id")
        .unsigned()
        .notNullable()
        .references("bikes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("changes")
    .dropTableIfExists("bikes")
    .dropTableIfExists("users");
};