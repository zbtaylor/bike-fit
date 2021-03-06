exports.up = function(knex) {
  return knex.schema.createTable("history", tbl => {
    tbl.increments("id");
    tbl.date("created").defaultTo(knex.fn.now());
    tbl
      .integer("saddleHeight_from")
      .unsigned()
      .notNullable();
    tbl
      .integer("saddleHeight_to")
      .unsigned()
      .notNullable();
    tbl
      .integer("saddleHeightOverBars_from")
      .unsigned()
      .notNullable();
    tbl
      .integer("saddleHeightOverBars_to")
      .unsigned()
      .notNullable();
    tbl
      .integer("saddleToHandlebar_from")
      .unsigned()
      .notNullable();
    tbl
      .integer("saddleToHandlebar_to")
      .unsigned()
      .notNullable();
    tbl.decimal("saddleAngle_from").notNullable();
    tbl.decimal("saddleAngle_to").notNullable();
    tbl
      .integer("saddleForeAft_from")
      .unsigned()
      .notNullable();
    tbl
      .integer("saddleForeAft_to")
      .unsigned()
      .notNullable();
    tbl
      .integer("stemLength_from")
      .unsigned()
      .notNullable();
    tbl
      .integer("stemLength_to")
      .unsigned()
      .notNullable();
    tbl
      .decimal("stemAngle_from")
      .unsigned()
      .notNullable();
    tbl
      .decimal("stemAngle_to")
      .unsigned()
      .notNullable();
    tbl
      .integer("handlebarWidth_from")
      .unsigned()
      .notNullable();
    tbl
      .integer("handlebarWidth_to")
      .unsigned()
      .notNullable();
    tbl
      .decimal("handlebarAngle_from")
      .unsigned()
      .notNullable();
    tbl
      .decimal("handlebarAngle_to")
      .unsigned()
      .notNullable();
    tbl
      .integer("brakeLeverPosition_from")
      .unsigned()
      .notNullable();
    tbl
      .integer("brakeLeverPosition_to")
      .unsigned()
      .notNullable();
    tbl
      .decimal("crankLength_from")
      .unsigned()
      .notNullable();
    tbl
      .decimal("crankLength_to")
      .unsigned()
      .notNullable();
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
    tbl.string("notes");
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("history");
};
