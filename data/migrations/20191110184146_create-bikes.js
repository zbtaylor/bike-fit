exports.up = function(knex) {
  return knex.schema.createTable("bikes", tbl => {
    tbl.increments();
    tbl
      .text("nickname", 128)
      .unique()
      .notNullable();
    tbl.text("brand", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.decimal("weight").notNullable();
    tbl.text("type", 128).notNullable();
    tbl.decimal("reach").notNullable();
    tbl.decimal("stack").notNullable();
    tbl.decimal("wheelbase").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("bikes");
};
