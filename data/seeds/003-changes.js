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
          created_on: "02/03/2019",
          last_edited: "02/26/2019",
          bike_id: 1
        },
        {
          id: 2,
          description: "Moved saddle forward 2mm.",
          notes: "Felt more pain in wrists.",
          created_on: "06/10/2019",
          last_edited: "07/18/2019",
          bike_id: 1
        },
        {
          id: 3,
          description: "Added 5mm spacer to steerer tube.",
          notes: "Felt less back pain.",
          created_on: "01/16/2019",
          last_edited: "01/20/2019",
          bike_id: 2
        },
        {
          id: 4,
          description: "Swapped to a new saddle.",
          notes: "Felt more connection with sit bones.",
          created_on: "10/22/2019",
          last_edited: "11/07/2019",
          bike_id: 3
        }
      ]);
    });
};
