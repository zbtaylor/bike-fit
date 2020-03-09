exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("history")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("history").insert([
        {
          created: "2019-10-13",
          saddleHeight_from: 190,
          saddleHeight_to: 190,
          saddleHeightOverBars_from: 40,
          saddleHeightOverBars_to: 40,
          saddleToHandlebar_from: 390,
          saddleToHandlebar_to: 390,
          saddleAngle_from: 1.0,
          saddleAngle_to: 1.5,
          saddleForeAft_from: 20,
          saddleForeAft_to: 20,
          stemLength_from: 110,
          stemLength_to: 110,
          stemAngle_from: -6,
          stemAngle_to: -6,
          handlebarWidth_from: 42,
          handlebarWidth_to: 42,
          handlebarAngle_from: 2,
          handlebarAngle_to: 2,
          brakeLeverPosition_from: 10,
          brakeLeverPosition_to: 9,
          crankLength_from: 172.5,
          crankLength_to: 172.5,
          bike_id: 1,
          user_id: 1,
          notes: "This is a comment about how this change felt."
        },
        {
          created: "2019-11-21",
          saddleHeight_from: 190,
          saddleHeight_to: 190,
          saddleHeightOverBars_from: 40,
          saddleHeightOverBars_to: 40,
          saddleToHandlebar_from: 390,
          saddleToHandlebar_to: 390,
          saddleAngle_from: 1.0,
          saddleAngle_to: 1.5,
          saddleForeAft_from: 20,
          saddleForeAft_to: 20,
          stemLength_from: 110,
          stemLength_to: 110,
          stemAngle_from: -6,
          stemAngle_to: -6,
          handlebarWidth_from: 42,
          handlebarWidth_to: 42,
          handlebarAngle_from: 2,
          handlebarAngle_to: 2,
          brakeLeverPosition_from: 10,
          brakeLeverPosition_to: 9,
          crankLength_from: 172.5,
          crankLength_to: 172.5,
          bike_id: 1,
          user_id: 1,
          notes: "This is a comment about how this change felt."
        },
        {
          created: "2019-11-30",
          saddleHeight_from: 190,
          saddleHeight_to: 190,
          saddleHeightOverBars_from: 40,
          saddleHeightOverBars_to: 40,
          saddleToHandlebar_from: 395,
          saddleToHandlebar_to: 390,
          saddleAngle_from: 1.0,
          saddleAngle_to: 1.5,
          saddleForeAft_from: 20,
          saddleForeAft_to: 20,
          stemLength_from: 110,
          stemLength_to: 110,
          stemAngle_from: -6,
          stemAngle_to: -6,
          handlebarWidth_from: 42,
          handlebarWidth_to: 42,
          handlebarAngle_from: 2,
          handlebarAngle_to: 2,
          brakeLeverPosition_from: 9,
          brakeLeverPosition_to: 9,
          crankLength_from: 172.5,
          crankLength_to: 170,
          bike_id: 1,
          user_id: 1,
          notes: "This is a comment about how this change felt."
        },
        {
          created: "2020-01-13",
          saddleHeight_from: 190,
          saddleHeight_to: 190,
          saddleHeightOverBars_from: 40,
          saddleHeightOverBars_to: 40,
          saddleToHandlebar_from: 400,
          saddleToHandlebar_to: 395,
          saddleAngle_from: 1.0,
          saddleAngle_to: 1.5,
          saddleForeAft_from: 20,
          saddleForeAft_to: 20,
          stemLength_from: 110,
          stemLength_to: 110,
          stemAngle_from: -6,
          stemAngle_to: -6,
          handlebarWidth_from: 42,
          handlebarWidth_to: 42,
          handlebarAngle_from: 2,
          handlebarAngle_to: 2,
          brakeLeverPosition_from: 10,
          brakeLeverPosition_to: 9,
          crankLength_from: 172.5,
          crankLength_to: 172.5,
          bike_id: 1,
          user_id: 1,
          notes: ""
        }
      ]);
    });
};
