//importando a biblioteca knex
const knex = require('knex');
//improtando o arquivo dde configuração do knex
const config = require("../knexfile.js");
//cria a configuração de desenvolvimento
const dbKnex = knex(config.development);
//exportar a configuração através da constante dbknex
module.exports = dbKnex;