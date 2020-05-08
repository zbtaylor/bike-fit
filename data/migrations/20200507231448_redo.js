exports.up = function (knex) {
  return knex.schema.table("bikes", (tbl) => {
    tbl.dropColumn("saddleHeight");
    tbl.dropColumn("saddleHeightOverBars");
    tbl.dropColumn("saddleToHandlebar");
    tbl.dropColumn("saddleAngle");
    tbl.dropColumn("saddleForeAft");
    tbl.dropColumn("stemLength");
    tbl.dropColumn("stemAngle");
    tbl.dropColumn("handlebarWidth");
    tbl.dropColumn("handlebarAngle");
    tbl.dropColumn("brakeLeverPosition");
    tbl.dropColumn("crankLength");
  });
};

exports.down = function (knex) {
  return knex.schema.table("bikes", (tbl) => {
    tbl.integer("saddleHeight").unsigned().defaultTo(0);
    tbl.integer("saddleHeightOverBars").unsigned().defaultTo(0);
    tbl.integer("saddleToHandlebar").unsigned().defaultTo(0);
    tbl.decimal("saddleAngle").defaultTo(0);
    tbl.integer("saddleForeAft").unsigned().defaultTo(0);
    tbl.integer("stemLength").unsigned().defaultTo(0);
    tbl.decimal("stemAngle").defaultTo(0);
    tbl.integer("handlebarWidth").unsigned().defaultTo(0);
    tbl.decimal("handlebarAngle").defaultTo(0);
    tbl.integer("brakeLeverPosition").unsigned().defaultTo(0);
    tbl.decimal("crankLength").unsigned().defaultTo(0);
  });
};
