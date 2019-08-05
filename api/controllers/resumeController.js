const logger = require('../../logger');
const resumeService = require('../service/resumeService');

module.exports = {
    getSample(req, res, next) {
        logger.log("info", `${req.method} ${req.url}    RequestType: ${req.query.q}    Question: ${req.query.d}`);
        res.send(resumeService.getTextResponse(req.query.q));
    }
};