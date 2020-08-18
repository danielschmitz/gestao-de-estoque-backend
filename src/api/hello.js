const { sayHello } = require("../services/hello")

module.exports = app => {
    app.get('/hello', (req, res) => res.send(sayHello()))
}