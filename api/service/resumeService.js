const resumeData = require('./data');

module.exports = {
    getTextResponse(query) {
        return resumeData[query];
    }
}