exports.up = function(knex) {
  return knex.schema.table("bikes", tbl => {
    tbl.dropColumn("reach");
    tbl.dropColumn("stack");
    tbl.dropColumn("wheelbase");
    tbl.integer("saddleHeight");
    tbl.integer("saddleHeightOverBars");
    tbl.integer("saddleToHandlebar");
    tbl.integer("saddleAngle");
    tbl.integer("saddleForeAft");
    tbl.integer("stemLength");
    tbl.integer("stemAngle");
    tbl.integer("handlebarWidth");
    tbl.integer("handlebarAngle");
    tbl.integer("brakeLeverPosition");
    tbl.integer("crankLength");
  });
};

exports.down = function(knex) {
  return knex.schema.table("bikes", tbl => {
    tbl.integer("reach");
    tbl.integer("stack");
    tbl.integer("wheelbase");
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
