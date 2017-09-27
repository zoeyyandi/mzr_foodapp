
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vendors').del()
    .then(function () {
      return Promise.all([
        knex('vendors').insert({address: '1600 Pennsylvania Ave NW, Washington, DC 20500, USA', phonenumber: '1-202-456-1111', password: 1234}),
      ]);
    });
};