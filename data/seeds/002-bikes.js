exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("bikes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("bikes").insert([
        {
          nickname: "Rocket",
          brand: "Specialized",
          model: "Allez Sprint",
          type: "Road",
          weight: 19,
          frameSize: 56,
          user_id: 1,
        },
      ]);
    });
};
