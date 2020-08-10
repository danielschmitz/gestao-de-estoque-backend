const db = require('../libs/knex')
const bcrypt = require('bcryptjs')

const tabela = 'usuarios'

module.exports = app => {
    app.get('/usuarios', async function(req,res) {
        const usuarios = await db(tabela)
        return res.json(usuarios)
    })
    app.post('/usuario', async function(req,res, next) {
        const { nome, email, senha } = req.body
        
        const emailExiste = await db(tabela).where({email}).first()
        if (emailExiste) { return res.badRequest('Email Inválido!!') }
        
        const result = await db(tabela).insert(
            {   
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )
        const id = result[0]
        return res.json({id})
    })
}