const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex.raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE");
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        email: "test@test.com",
        password: bcrypt.hashSync("test", 14),
        active: true
      }
    ]);
  });
};
