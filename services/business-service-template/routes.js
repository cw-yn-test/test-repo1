// routes.js

'use strict';

module.exports = function (service) {
    // main API url
    const API_URL = service.url + '/contacts';

    var contactCntl = require('./src/controllers/ContactController');
    service.router.get(API_URL, contactCntl.search);
    service.router.post(API_URL, contactCntl.create);
    service.router.get(API_URL + '/:id', contactCntl.getByID);
    service.router.put(API_URL + '/:id', contactCntl.update);
    service.router.delete(API_URL + '/:id', contactCntl.delete);

    // demo transaction support
    const TRANSACTION_API_URL = service.url + '/upgrades';
    service.router.post(TRANSACTION_API_URL, contactCntl.upgrade);

    // customer view API url
    const CUSTOMER_API_URL = service.url + '/customers';
    var customerViewCntl = require('./src/controllers/CustomerViewController');
    service.router.get(CUSTOMER_API_URL, customerViewCntl.search);
    service.router.get(CUSTOMER_API_URL + '/:id', customerViewCntl.getByID);

    // customer Contacts API url (demo on-to-many relationship)
    const CUSTOMER_CONTACTS_API_URL = service.url + '/customercontacts';
    var customerContactCntl = require('./src/controllers/CustomerContactsController');
    service.router.get(CUSTOMER_CONTACTS_API_URL + '/:id', customerContactCntl.getByID);
};
