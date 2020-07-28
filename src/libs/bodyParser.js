//
// bodyParser ajuda na conversão do corpo da requisição http em json
//

const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
}