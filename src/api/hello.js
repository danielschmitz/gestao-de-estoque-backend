module.exports = app => {
    app.get('/hello', function(req,res) {
        res.send('Olá Mundo')
    })
}