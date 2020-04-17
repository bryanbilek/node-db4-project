exports.seed = function(knex) {
  return knex('instructions').truncate()
    .then(function () {

      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, step_instruction: 'Preheat your oven to 350' },
        { recipe_id: 1, step_number: 2, step_instruction: 'Mix eggs with flour & choc chips' },
        { recipe_id: 2, step_number: 1, step_instruction: 'Bring 3 cups of water to a boil' }
      ]);
    });
};