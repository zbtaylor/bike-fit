exports.up = function (knex) {
  return knex.schema.table("msmt_history", (tbl) => {
    tbl.integer("saddleHeight").unsigned().alter();
    tbl.integer("saddleHeightOverBars").unsigned().alter();
    tbl.integer("saddleToHandlebar").unsigned().alter();
    tbl.decimal("saddleAngle").alter();
    tbl.integer("saddleForeAft").unsigned().alter();
    tbl.integer("stemLength").unsigned().alter();
    tbl.decimal("stemAngle").alter();
    tbl.integer("handlebarWidth").unsigned().alter();
    tbl.decimal("handlebarAngle").alter();
    tbl.integer("brakeLeverPosition").unsigned().alter();
    tbl.decimal("crankLength").unsigned().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.table("msmt_history", (tbl) => {
    tbl.integer("saddleHeight").unsigned().notNullable().alter();
    tbl.integer("saddleHeightOverBars").unsigned().notNullable().alter();
    tbl.integer("saddleToHandlebar").unsigned().notNullable().alter();
    tbl.decimal("saddleAngle").notNullable().alter();
    tbl.integer("saddleForeAft").unsigned().notNullable().alter();
    tbl.integer("stemLength").unsigned().notNullable().alter();
    tbl.decimal("stemAngle").notNullable().alter();
    tbl.integer("handlebarWidth").unsigned().notNullable().alter();
    tbl.decimal("handlebarAngle").notNullable().alter();
    tbl.integer("brakeLeverPosition").unsigned().notNullable().alter();
    tbl.decimal("crankLength").unsigned().notNullable().alter();
  });
};
