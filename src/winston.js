const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'log/api.log'})
    ]
});

module.exports = logger;
