// index.js
'use strict';

const server = require('./server');

server.init({}, (error) => {
    if (!error) {
        service.logger.info(`Service ${service.name} is Ready at ${service.port}`);
    }
});
