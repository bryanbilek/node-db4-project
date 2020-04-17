exports.seed = function (knex) {
  return knex('recipes').truncate()
    .then(function () {

      return knex('recipes').insert([
        { name: 'Cookies' },
        { name: 'Fried Rice' },
        { name: 'Pasta' }
      ]);
    });
};