// see https://tools.ietf.org/html/rfc7807 for more info.
module.exports = {
    // an example for error handling
    ALREADY_EXISTING_CONTACT: {
        // title for this error
        errorCode: 'ALREADY_EXISTING_CONTACT',

        // type points to the page with more info
        type: 'http://daikinlab.com/api_doc/public/index.html#Errors',

        // resource key to find the localized error description
        resourceKey: 'error.existing.contact',

        // http status code
        httpStatus: 409
    },

    INVALID_CONTACT_ID: {
        // title for this error
        errorCode: 'INVALID_CONTACT_ID',

        // type points to the page with more info
        type: 'http://daikinlab.com/api_doc/public/index.html#Errors',

        // resource key to find the localized error description
        resourceKey: 'error.invalid.contact',

        // http status code
        httpStatus: 404
    },

    INVALID_CUSTOMER_ID: {
        // title for this error
        errorCode: 'INVALID_CUSTOMER_ID',

        // type points to the page with more info
        type: 'http://daikinlab.com/api_doc/public/index.html#Errors',

        // resource key to find the localized error description
        resourceKey: 'error.invalid.customer',

        // http status code
        httpStatus: 404
    }
};
