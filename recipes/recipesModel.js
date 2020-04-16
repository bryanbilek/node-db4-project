const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getRecipesById(id) {
    return db('recipes')
        .where({ id })
        .first()
}

function getShoppingList(recipe_id) {
    return db('ingredients as i')
    .join('recipes as r', 'r.id', 'i.recipe_id')
    .select('i.name', 'i.quantity')
    .where('i.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('instructions as i')
    .join('recipes as r', 'r.id', 'i.recipe_id')
    .select('i.step_number', 'i.step_instruction')
    .where('i.recipe_id', recipe_id)
}