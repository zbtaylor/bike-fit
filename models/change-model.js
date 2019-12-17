const db = require("../data/dbConfig.js");

const getByBikeId = (bike_id, user_id) => {
  return db("changes")
    .where({
      bike_id: bike_id,
      user_id: user_id
    })
    .orderBy("created", "desc");
};

const insert = (change, user_id) => {
  change.user_id = user_id;
  return db("changes")
    .insert(change)
    .then(res => {
      return getByBikeId(change.bike_id, user_id);
    });
};

const update = (change_id, user_id, change) => {
  return db("changes")
    .where({
      id: change_id,
      user_id: user_id
    })
    .update(change, ["bike_id"])
    .then(res => {
      return getByBikeId(change.bike_id, user_id);
    });
};

const remove = async (change_id, user_id) => {
  const bike_id = await db
    .select("bike_id")
    .from("changes")
    .where({
      id: change_id,
      user_id: user_id
    });
  return db("changes")
    .where({
      id: change_id,
      user_id: user_id
    })
    .select("bike_id")
    .del()
    .then(() => {
      return getByBikeId(bike_id[0].bike_id, user_id);
    });
};

module.exports = {
  getByBikeId,
  insert,
  update,
  remove
};
