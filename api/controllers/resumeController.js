module.exports = {
    getSample(req, res, next) {
        console.log("Request is :", req.query);
        res.send('OK');
    }
};