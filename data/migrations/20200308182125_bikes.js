exports.up = function(knex) {
  return knex.schema.createTable("bikes", tbl => {
    tbl.increments("id");
    tbl
      .text("nickname")
      .unique()
      .notNullable();
    tbl.text("brand").notNullable();
    tbl.text("model").notNullable();
    tbl.decimal("weight").notNullable();
    tbl.text("type").notNullable();
    tbl
      .integer("saddleHeight")
      .unsigned()
      .defaultTo(0);
    tbl
      .integer("saddleHeightOverBars")
      .unsigned()
      .defaultTo(0);
    tbl
      .integer("saddleToHandlebar")
      .unsigned()
      .defaultTo(0);
    tbl.decimal("saddleAngle").defaultTo(0);
    tbl
      .integer("saddleForeAft")
      .unsigned()
      .defaultTo(0);
    tbl
      .integer("stemLength")
      .unsigned()
      .defaultTo(0);
    tbl.decimal("stemAngle").defaultTo(0);
    tbl
      .integer("handlebarWidth")
      .unsigned()
      .defaultTo(0);
    tbl.decimal("handlebarAngle").defaultTo(0);
    tbl
      .integer("brakeLeverPosition")
      .unsigned()
      .defaultTo(0);
    tbl
      .decimal("crankLength")
      .unsigned()
      .defaultTo(0);
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
  return knex.schema.dropTableIfExists("bikes");
};
