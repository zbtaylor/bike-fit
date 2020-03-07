exports.up = function(knex) {
  return knex.schema.dropTable("changes").createTable("history", tbl => {
    tbl.increments("id");
    tbl.date("created").defaultTo(knex.fn.now());
    tbl.integer("saddleHeightChange");
    tbl.integer("saddleHeightOverBarsChange");
    tbl.integer("saddleToHandlebarChange");
    tbl.integer("saddleAngleChange");
    tbl.integer("saddleForeAftChange");
    tbl.integer("stemLengthChange");
    tbl.integer("stemAngleChange");
    tbl.integer("handlebarWidthChange");
    tbl.integer("handlebarAngleChange");
    tbl.integer("brakeLeverPositionChange");
    tbl.integer("crankLengthChange");
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
  return knex.schema.createTable("changes", tbl => {
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
