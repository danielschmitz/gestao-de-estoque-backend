//
// Cors ativa o CORS no servidor, permitindo que urls diferentes acessem sua API
//

const cors = require('cors')

module.exports = app => {
    app.use(cors({
        exposedHeaders: 'Authorization'
    }))
}