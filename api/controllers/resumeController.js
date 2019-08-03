const resumeService = require('../service/resumeService');

module.exports = {
    getSample(req, res, next) {
        console.log("Request is :", req.query);
        res.send(resumeService.getTextResponse(req.query.q));
    }
};