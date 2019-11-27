const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("changes");
}

function getById(id) {
  return db("changes")
    .where({ id })
    .first();
}

function insert(bike) {
  return db("changes")
    .insert(bike)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("changes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("changes")
    .where("id", id)
    .del();
}
