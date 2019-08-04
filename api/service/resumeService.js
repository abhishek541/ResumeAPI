const resumeData = require('./data');

module.exports = {
    getTextResponse(query) {
        if(query == "Puzzle") {
            return resumeData[query].join('\n');
        }
        return resumeData[query];
    }
}