exports.up = function (knex) {
  return knex.schema.table("msmt_history", (tbl) => {
    tbl.datetime("createdAt").defaultTo(knex.fn.now()).alter();
  });
};

exports.down = function (knex) {
  return knex.schema.table("msmt_history", (tbl) => {
    tbl.date("createdAt").defaultTo(knex.fn.now()).alter();
  });
};
