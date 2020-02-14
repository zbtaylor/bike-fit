const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE");
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        email: "zbtaylor1@gmail.com",
        password: bcrypt.hashSync("test", 14)
      }
    ]);
  });
};
