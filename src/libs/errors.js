
module.exports = app => {
    app.use(function(req, res, next) {
        res.badRequest = function(error) {
            return res.status(500).json({error});
        };
        res.notFound = function(error) {
            return res.status(404).json({error});
        };
        next();
    });
}