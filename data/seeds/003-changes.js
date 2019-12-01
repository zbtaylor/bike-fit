exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("changes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("changes").insert([
        {
          description: "Changed to an 80mm stem from 100mm.",
          notes: "Felt great.",
          bike_id: 1
        },
        {
          description: "Moved saddle forward 2mm.",
          notes: "Felt more pain in wrists.",
          bike_id: 1
        },
        {
          description: "Added 5mm spacer to steerer tube.",
          notes: "Felt less back pain.",
          bike_id: 2
        },
        {
          description: "Swapped to a new saddle.",
          notes: "Felt more connection with sit bones.",
          bike_id: 3
        }
      ]);
    });
};
