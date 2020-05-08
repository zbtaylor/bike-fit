exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("msmt_history")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("msmt_history").insert([
        {
          createdAt: "2020-03-01",
          saddleHeight: 762,
          saddleHeightOverBars: 152,
          saddleToHandlebar: 395,
          saddleAngle: -1.0,
          saddleForeAft: 102,
          stemLength: 110,
          stemAngle: -6,
          handlebarWidth: 400,
          handlebarAngle: 3,
          brakeLeverPosition: 25,
          crankLength: 172.5,
          bike_id: 1,
          user_id: 1,
          notes: "Initial fit measurements.",
        },
      ]);
    });
};
