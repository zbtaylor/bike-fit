const db = require("../data/dbConfig.js");
const History = require("./history-model.js");

const get = (user_id) => {
  return db("bikes").where({
    user_id: user_id,
  });
};

const getById = async (bike_id, user_id) => {
  let bike = await db("bikes")
    .where({
      id: bike_id,
      user_id: user_id,
    })
    .first();
  const current_msmts = await History.getLatestByBikeId(bike_id, user_id);
  bike.current_msmts = current_msmts;
  return bike;
};

const insert = (bike, user_id) => {
  bike.user_id = user_id;
  return db("bikes").insert(bike, "*");
};

const update = (bike_id, user_id, updates) => {
  return db("bikes")
    .where({
      id: bike_id,
      user_id,
    })
    .update(updates, "*");
};

const remove = (bike_id, user_id) => {
  return db("bikes")
    .where({
      id: bike_id,
      user_id: user_id,
    })
    .del();
};

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
