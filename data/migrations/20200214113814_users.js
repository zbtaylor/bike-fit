exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.renameColumn("confirmed", "active");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
