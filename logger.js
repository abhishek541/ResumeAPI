const winston = require('winston');
const moment = require('moment-timezone');

var options = {
    level: 'info',
    filename: 'app.log',
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
};

var logFormat = winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`);

var getCurrentTime = winston.format((info, opts) => {
    if(opts.tz)
      info.timestamp = moment().tz(opts.tz).format();
    return info;
});

var logger = new winston.createLogger({
    format: winston.format.combine(
        getCurrentTime({ tz: 'America/New_York' }),
        winston.format.prettyPrint(),
        logFormat
    ),
    transports: [
        new winston.transports.File(options)
    ],
    exitOnError: false,
});

module.exports = logger;