exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("history")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("history").insert([
        {
          created: "2020-03-01",
          saddleHeight_from: 0,
          saddleHeight_to: 762,
          saddleHeightOverBars_from: 0,
          saddleHeightOverBars_to: 152,
          saddleToHandlebar_from: 0,
          saddleToHandlebar_to: 395,
          saddleAngle_from: 0,
          saddleAngle_to: -1.0,
          saddleForeAft_from: 0,
          saddleForeAft_to: 102,
          stemLength_from: 0,
          stemLength_to: 110,
          stemAngle_from: 0,
          stemAngle_to: -6,
          handlebarWidth_from: 0,
          handlebarWidth_to: 400,
          handlebarAngle_from: 0,
          handlebarAngle_to: 3,
          brakeLeverPosition_from: 0,
          brakeLeverPosition_to: 25,
          crankLength_from: 0,
          crankLength_to: 172.5,
          bike_id: 1,
          user_id: 1,
          notes: "Initial fit measurements."
        }
      ]);
    });
};
