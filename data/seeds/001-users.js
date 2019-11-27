const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "zbtaylor1@gmail.com",
          password: bcrypt.hashSync("test", 14)
        }
      ]);
    });
};
