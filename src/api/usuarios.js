const db = require('../libs/knex')
const bcrypt = require('bcryptjs')

async function emailExiste(email) {
    return await db('usuarios').where({email}).first() != undefined
}

module.exports = app => {

    app.get('/usuarios', async function(req,res) {
        const usuarios = await db('usuarios')
        return res.json(usuarios)
    })
    
    app.post('/usuario', async function(req,res) {
        const { nome, email, senha } = req.body
        
        if (await emailExiste(email)) { return res.badRequest('Email já cadastrado') }
        
        const result = await db('usuarios').insert(
            {   
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )
        const id = result[0]
        return res.json({id})
    })

    app.put('/usuario/:id', async function(req,res) {
        const { id } = req.params
        const { nome, email, senha } = req.body
        
        const usuario = await db('usuarios').where({id}).first()
        
        if (usuario.email !== email) { // Está alterando o email
            if (await emailExiste(email)) { return res.badRequest('Email já cadastrado') }
        }

        await db('usuarios').where({id}).update(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            })
        
        const result = await db('usuarios').where({id}).first() 
        
        return res.json({result})

    })
}