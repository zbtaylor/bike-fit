const db = require("../data/dbConfig.js");
const bcrypt = require("bcryptjs");

const get = () => {
  return db("users");
};

const getById = id => {
  return db("users")
    .where({ id })
    .first();
};

const getByEmail = email => {
  return db("users")
    .where({ email })
    .first();
};

const insert = newUser => {
  return db("users")
    .insert(newUser, "id")
    .then(id => {
      return getById(id[0]); // should I be returning the whole user here?
    });
};

const update = (id, updates) => {
  return db("users")
    .where({ id })
    .update(updates);
};

const remove = id => {
  return db("users")
    .where("id", id)
    .del();
};

module.exports = {
  get,
  getById,
  getByEmail,
  insert,
  update,
  remove
};
