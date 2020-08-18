const express = require('express')
const app = express();

//
// Biliotecas
//
require('./libs/cors')(app)
require('./libs/bodyParser')(app)
require('./libs/knex')(app)
require('./libs/errors')(app)



//
// API
//
require('./api/hello')(app)
require('./api/usuarios')(app)

app.use(function(err, req, res, next) {
    console.error("DEU ERRO");
    res.status(500).send('Something broke!');
  });


//
// Iniciar servidor
//
require('./libs/start')(app)

