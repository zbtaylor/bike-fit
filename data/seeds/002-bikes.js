exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bikes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bikes").insert([
        {
          id: 1,
          nickname: "Rocket",
          brand: "Specialized",
          model: "Allez Sprint",
          weight: "19",
          type: "Road",
          reach: "395",
          stack: "554",
          wheelbase: "984",
          user_id: 1
        },
        {
          id: 2,
          nickname: "Blackbird",
          brand: "Cannondale",
          model: "SuperSix Evo",
          weight: "17",
          type: "Road",
          reach: "390",
          stack: "574",
          wheelbase: "992",
          user_id: 1
        },
        {
          id: 3,
          nickname: "Abominable",
          brand: "Yeti",
          model: "SB150",
          weight: "22",
          type: "Mountain",
          reach: "480",
          stack: "624",
          wheelbase: "1248",
          user_id: 1
        }
      ]);
    });
};
