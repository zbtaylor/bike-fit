exports.up = function (knex) {
  return knex.schema.table("bikes", (tbl) => {
    tbl.integer("frameSize").unsigned().notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.table("bikes", (tbl) => {
    tbl.dropColumn("frameSize");
  });
};
