const config = {
    webAppURL: process.env.WEB_APP_URL || '/docs',
    apiDocsURL: process.env.WEB_APP_URL ? `${process.env.WEB_APP_URL}/api` : '/docs/api',
    designSystemURL: process.env.WEB_APP_URL
        ? `${process.env.WEB_APP_URL}/docs/design-system`
        : '/docs/design-system'
};

module.exports = config;
