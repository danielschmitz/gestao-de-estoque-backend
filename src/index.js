const express = require('express')
const app = express();




//
// Biliotecas
//
require('./libs/cors')(app)
require('./libs/bodyParser')(app)
require('./libs/knex')(app)


//
// API
//
require('./api/hello')(app)

//
// Iniciar servidor
//
require('./libs/start')(app)

