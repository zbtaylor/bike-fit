const db = require("./dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("bikes");
}

function getById(id) {
  return db("bikes")
    .where({ id })
    .first();
}

function insert(bike) {
  return db("bikes")
    .insert(bike)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("bikes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("bikes")
    .where("id", id)
    .del();
}
