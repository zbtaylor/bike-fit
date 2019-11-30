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

function insert(change) {
  return db("changes")
    .insert(change, ["id"])
    .then(ids => {
      return getById(parseInt(ids[0]));
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
