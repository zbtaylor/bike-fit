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
  const hash = bcrypt.hashSync(newUser.password, 14);
  newUser.password = hash;
  return db("users")
    .insert(newUser, "id")
    .then(id => {
      return getById(id[0]); // should I be returning the whole user here?
    });
};

const update = (id, updates) => {
  // require user to enter password to make any changes?
  // only require password when changing password?
  const hash = bcrypt.hashSync(updates.password, 14);
  updates.password = hash;
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
