exports.seed = function (knex) {
  return knex('ingredients').truncate()
    .then(function () {

      return knex('ingredients').insert([
        { recipe_id: 1, name: 'Flour', quantity: 5 },
        { recipe_id: 1, name: 'Chocolate Chips', quantity: 100 },
        { recipe_id: 1, name: 'Eggs', quantity: 3 },
        { recipe_id: 2, name: 'White Rice', quantity: 50 }
      ]);
    });
};