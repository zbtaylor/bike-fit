const db = require("../dbConfig.js");
const bcrypt = require("bcryptjs");

module.exports = {
  get,
  getById,
  getByEmail,
  insert,
  update,
  remove
};

function get() {
  return db("users");
}

function getById(id) {
  return db("users")
    .where({ id })
    .first();
}

function getByEmail(email) {
  return db("users")
    .where({ email })
    .first();
}

function insert(user) {
  const credentials = user;
  const hash = bcrypt.hashSync(credentials.password, 14);
  credentials.password = hash;
  return db("users")
    .insert(credentials, "id")
    .then(id => {
      return getById(id[0]);
    });
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
