
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({email: 'gurlz_rule_boyz_drool@yahoo.com', phonenumber: '416-502-2869', password: 1234}),
        knex('users').insert({email: 'Fallen_angel86@hotmail.com', phonenumber: '647-667-2869', password: 1234}),
        knex('users').insert({email: 'quirkygal101@gmail.com', phonenumber: '416-668-1169', password: 1234}),
        knex('users').insert({email: 'ducks_r_jerks@aol.co.uk', phonenumber: '416-738-1879', password: 1234})
      ]);
    });
};
