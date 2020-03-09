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
    tbl.integer("saddleHeight").unsigned();
    tbl.integer("saddleHeightOverBars").unsigned();
    tbl.integer("saddleToHandlebar").unsigned();
    tbl.decimal("saddleAngle");
    tbl.integer("saddleForeAft").unsigned();
    tbl.integer("stemLength").unsigned();
    tbl.decimal("stemAngle");
    tbl.integer("handlebarWidth").unsigned();
    tbl.decimal("handlebarAngle");
    tbl.integer("brakeLeverPosition").unsigned();
    tbl.decimal("crankLength").unsigned();
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
