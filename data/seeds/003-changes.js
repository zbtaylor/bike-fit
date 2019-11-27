exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("changes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("changes").insert([
        {
          id: 1,
          description: "Changed to an 80mm stem from 100mm.",
          notes: "Felt great.",
          created_on: "2019-02-03",
          last_edited: "2019-02-26",
          bike_id: 1
        },
        {
          id: 2,
          description: "Moved saddle forward 2mm.",
          notes: "Felt more pain in wrists.",
          created_on: "2019-06-10",
          last_edited: "2019-07-18",
          bike_id: 1
        },
        {
          id: 3,
          description: "Added 5mm spacer to steerer tube.",
          notes: "Felt less back pain.",
          created_on: "2019-01-16",
          last_edited: "2019-01-20",
          bike_id: 2
        },
        {
          id: 4,
          description: "Swapped to a new saddle.",
          notes: "Felt more connection with sit bones.",
          created_on: "2019-10-22",
          last_edited: "2019-11-07",
          bike_id: 3
        }
      ]);
    });
};
