/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('autores', (table)=>{
        table.increments();
        table.string("nome",80).notNullable();
        table.date("data_nascimento",11).notNullable();
        table.string("descricao",400).notNullable();
        table.string("foto",100).notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("autores");
};
