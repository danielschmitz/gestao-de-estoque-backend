const db = require('../libs/knex')
const bcrypt = require('bcryptjs')
const { getAll } = require('../services/usuarios')

module.exports = app => {

    app.get('/usuarios', async (req,res) => res.json(await getAll()) )
    
    app.post('/usuario', async function(req,res) {
        const { nome, email, senha } = req.body
        
        const emailExiste = await db('usuarios').where({email}).first()
        if (emailExiste) { return res.badRequest('Email já cadastrado') }
        
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
            const emailExiste = await db('usuarios').where({email}).first()
            if (emailExiste) { return res.badRequest('Email já cadastrado') }
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