const db = require('../libs/knex')

module.exports = app => {
    app.get('/usuarios', async function(req,res) {
        const usuarios = await db('usuarios')
        return res.json(usuarios)
    })
}