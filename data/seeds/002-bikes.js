exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bikes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bikes").insert([
        {
          nickname: "Rocket",
          brand: "Specialized",
          model: "Allez Sprint",
          weight: "19",
          type: "Road",
          user_id: 1,
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
          crankLength: 172.5
        }
      ]);
    });
};
