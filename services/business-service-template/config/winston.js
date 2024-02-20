// Uncomment below if you need to customize your logging

/*
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

module.exports = {
    // Log only if info.level less than or equal to this level
    level: 'silly',

    // specify the desired logging levels
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        //
        // - Write to all logs with level `info` and below to `quick-start-combined.log`.
        // - Write all logs error (and below) to `quick-start-error.log`.
        //
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
};

*/
