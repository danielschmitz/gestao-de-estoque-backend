//
// Inicia a aplicação
//

const port = process.env.PORT || 3000

module.exports = app => {
    app.listen(port, function () {
        console.log(`Server running at ${port}`)
    })
}