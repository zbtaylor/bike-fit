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

function getByBikeId(id) {
  return db("changes")
    .where({
      bike_id: id
    })
    .orderBy("created", "desc");
}

function insert(change) {
  return db("changes")
    .insert(change)
    .then(res => {
      return getByBikeId(change.bike_id);
    });
}

function update(id, change) {
  return db("changes")
    .where({ id })
    .update(change, ["bike_id"])
    .then(res => {
      return getByBikeId(change.bike_id);
    });
}

function remove(id) {
  return db("changes")
    .where("id", id)
    .del();
}
