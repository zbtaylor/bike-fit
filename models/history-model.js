const db = require("../data/dbConfig.js");

const getByBikeId = (bike_id, user_id) => {
  return db("msmt_history")
    .where({
      bike_id: bike_id,
      user_id: user_id,
    })
    .orderBy("createdAt", "desc");
};

const getLatestByBikeId = (bike_id, user_id) => {
  return db("msmt_history")
    .where({
      bike_id: bike_id,
      user_id: user_id,
    })
    .orderBy("createdAt", "desc")
    .first();
};

const insert = (change, user_id) => {
  change.user_id = user_id;
  return db("msmt_history").insert(change, "*");
};

const update = (hist_id, user_id, change) => {
  return db("msmt_history")
    .where({
      id: hist_id,
      user_id: user_id,
    })
    .update(change, "*");
};

const remove = async (change_id, user_id) => {
  const bike_id = await db.select("bike_id").from("msmt_history").where({
    id: change_id,
    user_id: user_id,
  });
  return db("msmt_history")
    .where({
      id: change_id,
      user_id: user_id,
    })
    .select("bike_id")
    .del()
    .then(() => {
      return getByBikeId(bike_id[0].bike_id, user_id);
    });
};

module.exports = {
  getByBikeId,
  getLatestByBikeId,
  insert,
  update,
  remove,
};
