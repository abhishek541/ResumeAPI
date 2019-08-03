module.exports = {
    getSample(req, res, next) {
        console.log("Request is :", req);
        res.send('OK');
    }
};