
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('booking').del()
    .then(function () {
      // Inserts seed entries
      return knex('booking').insert([
        {name: 'Banana', date: 2018-03-12, reason: 'Bruised', details: 'In a mosh pit', doctor_id: 3},
        {name: 'Lauren', date: 2018-08-22, reason: 'Very Sick', details: 'of your crap', doctor_id: 2},
        {name: 'Albert', date: 2018-05-01, reason: 'Virus', details: 'No sleep for man nights', doctor_id: 2},
      ]);
    });
};
