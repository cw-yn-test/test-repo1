// server.js

'use strict';

// Zen Micro-service
const Service = require('@daikin-zen/service').Service;

module.exports = {
    init: async (options, done) => {
        try {
            // initialize the service
            await new Service(
                Object.assign(
                    {
                        requireDatabase: true,
                        basePath: __dirname,
                        dbTypes: ['psql'],
                        dbConfigs: {
                            psql: {
                                dbName: 'entity',
                                dbSearchPath: ['test']
                            }
                        }
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
