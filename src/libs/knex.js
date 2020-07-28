//
// dotenv lê arquivos .env e .env.prod
//
require('dotenv').config()

// Descobre se está em ambiente de produção
const isProduction = process.env.NODE_ENV === 'production'

// Lê o arquivo de configuração
const knexfile = require('../../knexfile')

module.exports = require('knex')(
    isProduction ?
        knexfile.production : knexfile.development
)