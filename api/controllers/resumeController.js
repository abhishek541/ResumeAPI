module.exports = {
    getSample(req, res, next) {
        console.log("Request is :", req.body);
        res.json('OK');
    }
};