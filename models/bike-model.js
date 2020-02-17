const db = require("../data/dbConfig.js");
const Changes = require("./change-model.js");

const get = user_id => {
  return db("bikes").where({
    user_id: user_id
  });
};

const getById = async (bike_id, user_id) => {
  const bike = await db("bikes")
    .where({
      id: bike_id,
      user_id: user_id
    })
    .first();
  const changes = await Changes.getByBikeId(bike_id, user_id);
  bike.changes = changes;
  return bike;
};

const insert = (bike, user_id) => {
  bike.user_id = user_id;
  return db("bikes")
    .insert(bike, "id") // Can return entire record with * or with columns in an array [""] in psql
    .then(id => {
      return getById(id[0]);
    });
};

const update = (bike_id, user_id, updates) => {
  return db("bikes")
    .where({
      id: bike_id,
      user_id
    })
    .update(updates);
};

const remove = (bike_id, user_id) => {
  return db("bikes")
    .where({
      id: bike_id,
      user_id: user_id
    })
    .del();
};

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};
