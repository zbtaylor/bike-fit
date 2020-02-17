exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.dropColumn("hash");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
