const db = require('../libs/knex')

module.exports = {
    getAll: async () => await db('usuarios')
}