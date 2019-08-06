const logger = require('../../logger');
const resumeService = require('../service/resumeService');

module.exports = {
    getSample(req, res, next) {
        logger.log("info", `${req.method} ${req.path}    RequestType: ${req.query.q}    Question: ${req.query.d}`);
        if(req.query.q === 'Puzzle') {
            res.send(resumeService.getQueryAnswer(req.query.d));
        } else {
            res.send(resumeService.getTextResponse(req.query.q));
        }
    }
};