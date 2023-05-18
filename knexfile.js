// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    //coloca o banco de dados a ser utilizado
    client: 'sqlite3',
    connection: {
      filename: './data/editora.db3'
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    },
    seeds:{
      directory: './data/seeds'
    }
  },
};
