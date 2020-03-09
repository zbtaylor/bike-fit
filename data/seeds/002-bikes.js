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
          user_id: 1
          // saddleHeight: 100,
          // saddleHeightOverBars: 100,
          // saddleToHandlebar: 100,
          // saddleAngle: 100,
          // saddleForeAft: 100,
          // stemLength: 100,
          // stemAngle: 100,
          // handlebarWidth: 100,
          // handlebarAngle: 100,
          // brakeLeverPosition: 100,
          // crankLength: 100
        },
        {
          nickname: "Blackbird",
          brand: "Cannondale",
          model: "SuperSix Evo",
          weight: "17",
          type: "Road",
          user_id: 1
          // saddleHeight: 100,
          // saddleHeightOverBars: 100,
          // saddleToHandlebar: 100,
          // saddleAngle: 100,
          // saddleForeAft: 100,
          // stemLength: 100,
          // stemAngle: 100,
          // handlebarWidth: 100,
          // handlebarAngle: 100,
          // brakeLeverPosition: 100,
          // crankLength: 100
        },
        {
          nickname: "Abominable",
          brand: "Yeti",
          model: "SB150",
          weight: "22",
          type: "Mountain",
          user_id: 1
          // saddleHeight: 100,
          // saddleHeightOverBars: 100,
          // saddleToHandlebar: 100,
          // saddleAngle: 100,
          // saddleForeAft: 100,
          // stemLength: 100,
          // stemAngle: 100,
          // handlebarWidth: 100,
          // handlebarAngle: 100,
          // brakeLeverPosition: 100,
          // crankLength: 100
        }
      ]);
    });
};
