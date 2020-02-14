exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments("id");
      tbl
        .text("email")
        .unique()
        .notNullable();
      tbl.text("password").notNullable();
      tbl.boolean("confirmed").defaultTo(false);
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
      tbl.integer("reach");
      tbl.integer("stack");
      tbl.integer("wheelbase");
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
      tbl.timestamp("created").defaultTo(knex.fn.now());
      tbl
        .integer("bike_id")
        .unsigned()
        .notNullable()
        .references("bikes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
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
  return knex.schema
    .dropTableIfExists("changes")
    .dropTableIfExists("bikes")
    .dropTableIfExists("users");
};
