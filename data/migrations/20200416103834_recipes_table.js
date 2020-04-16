
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('name', 150).notNullable()
    })

    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.integer('recipe_id').references('id').inTable('recipes').unsigned().notNullable()
        tbl.string('name', 100).notNullable()
        tbl.float('quantity').notNullable()
    })  

    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.integer('recipe_id').references('id').inTable('recipes').unsigned().notNullable()
        tbl.integer('step_number').notNullable().unsigned()
        tbl.string('step_instruction', 500).notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
