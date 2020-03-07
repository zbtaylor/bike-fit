exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("history")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("history").insert([
        {
          created: "2019-10-13",
          saddleHeightChange: 10,
          saddleHeightOverBarsChange: -23,
          saddleToHandlebarChange: 10,
          saddleAngleChange: 10,
          saddleForeAftChange: 10,
          stemLengthChange: -15,
          stemAngleChange: 10,
          handlebarWidthChange: 10,
          handlebarAngleChange: 10,
          brakeLeverPositionChange: 10,
          crankLengthChange: -10,
          bike_id: 1,
          user_id: 1
        },
        {
          created: "2019-11-21",
          saddleHeightChange: 10,
          saddleHeightOverBarsChange: -23,
          saddleToHandlebarChange: 10,
          saddleAngleChange: 10,
          saddleForeAftChange: 10,
          stemLengthChange: -15,
          stemAngleChange: 10,
          handlebarWidthChange: 10,
          handlebarAngleChange: 10,
          brakeLeverPositionChange: 10,
          crankLengthChange: -10,
          bike_id: 1,
          user_id: 1
        },
        {
          created: "2019-11-30",
          saddleHeightChange: 10,
          saddleHeightOverBarsChange: -23,
          saddleToHandlebarChange: 10,
          saddleAngleChange: 10,
          saddleForeAftChange: 10,
          stemLengthChange: -15,
          stemAngleChange: 10,
          handlebarWidthChange: 10,
          handlebarAngleChange: 10,
          brakeLeverPositionChange: 10,
          crankLengthChange: -10,
          bike_id: 1,
          user_id: 1
        },
        {
          created: "2020-01-13",
          saddleHeightChange: 10,
          saddleHeightOverBarsChange: -23,
          saddleToHandlebarChange: 10,
          saddleAngleChange: 10,
          saddleForeAftChange: 10,
          stemLengthChange: -15,
          stemAngleChange: 10,
          handlebarWidthChange: 10,
          handlebarAngleChange: 10,
          brakeLeverPositionChange: 10,
          crankLengthChange: -10,
          bike_id: 1,
          user_id: 1
        }
      ]);
    });
};
