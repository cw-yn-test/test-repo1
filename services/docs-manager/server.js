// server.js

('use strict');

// Zen Micro-service
const Service = require('@daikin-zen/service').Service;

module.exports = {
    init: async (options, done) => {
        try {
            // initialize the service
            await new Service(
                Object.assign(
                    {
                        requireDatabase: false,
                        secured: false,
                        skipAPIDoc: true,
                        basePath: __dirname
                    },
                    options
                )
            ).start();

            return done();
        } catch (err) {
            done(err);
        }
    }
};
