const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get(id) {
  return db("bikes").where("user_id", id);
}

async function getById(id) {
  const changes = await db("changes")
    .where({
      bike_id: id
    })
    .orderBy("created", "desc");
  const bike = await db("bikes")
    .where({ id })
    .first();
  bike.changes = changes;
  return bike;
}

function insert(bike) {
  return db("bikes")
    .insert(bike, "id") // Can return entire record with * or with columns in an array [""] in psql
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
