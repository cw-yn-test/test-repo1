// routes.js

'use strict';

const serve = require('koa-static');
const mount = require('koa-mount');
const path = require('path');

const util = require('util');
var config = require('./config/app');

module.exports = function(service) {
    // redirect middleware to redirect /docs to /docs/
    const redirect = async function(ctx, next) {
        if (
            ctx.request.url === config.webAppURL ||
            ctx.request.url === config.apiDocsURL
        ) {
            ctx.redirect(config.apiDocsURL + '/');
        } else if (ctx.request.url === config.designSystemURL) {
            ctx.redirect(config.designSystemURL + '/');
        } else if (ctx.request.url === config.webAppURL + '/logout') {
            let logoutURL = util.format(
                service.registry.url.iam.logout,
                encodeURIComponent(ctx.origin + config.webAppURL)
            );
            ctx.redirect(logoutURL);
        } else {
            return await next();
        }
    };

    service.app.use(redirect);

    let assetPath = __dirname + '/apidocs/site/';
    service.app.use(mount(config.apiDocsURL, serve(assetPath)));

    const designSystemPath = path.resolve(
        __dirname,
        '../../packages/design-system/storybook-static'
    );
    service.app.use(mount(config.designSystemURL, serve(designSystemPath)));
};
