// Current Microservice to test
const app = require('../server');
const { v4: uuidv4 } = require('uuid');
const { getTestUserAuthKey } = require('@daikin-zen/security-mock');

// This is the main Microservice URI
var API_URL = '/api/v1/contacts';

// Customer View Microservice URI, demonstrating complex queries
var CUSTOMER_VIEW_API_URL = '/api/v1/customers';

// Customer View Microservice URI, demonstrating complex queries
var CUSTOMER_CONTACTS_API_URL = '/api/v1/customercontacts';

// server points to the HTTP server where you submit the requests.
var server;

// require supertest
const request = require('supertest');
const INVALID_CONTACT = uuidv4();

// ------ START your tests here ---------
const firstCustomerId = 1;
const secondCustomerId = 2;

const contact1 = {
    name: 'First Contact',
    email: 'first@contact.com',
    phone: '1111111',
    rank: 1,
    customerId: firstCustomerId
};

const contact2 = {
    name: 'Second Contact',
    email: 'second@contact.com',
    phone: '2222222',
    rank: 2,
    customerId: secondCustomerId
};

const contact3 = {
    name: 'Third Contact',
    email: 'third@contact.com',
    rank: 5,
    customerId: firstCustomerId
};

var contactId1, contactId2, contactId3;

const customer1 = {
    id: 1,
    name: 'Apple',
    website: 'www.apple.com',
    established: 1976
};

const customer2 = {
    id: 2,
    name: 'Google',
    website: 'www.google.com',
    established: 1998
};

const customer1WithContactCount = Object.assign({}, customer1, { contactCount: '2' });
const customer2WithContactCount = Object.assign({}, customer2, { contactCount: '1' });

// close the server after each test
beforeAll(async () => {
    // Initialize the Microservice
    await app.init({}, async (err) => {
        if (err) {
            service.logger.error('Error initializing the server = ' + err);

            throw err;
        }
        server = service.server;

        await cleanUp();
    });
});

async function cleanUp() {
    await service.db.psql.executeQuery('truncate contact cascade');
}

// close the server after each test
afterAll(async () => {
    // Always close the Microservice after all tests are done.
    await service.stop();
});

// add two contacts
describe('contacts: post', () => {
    // add first contact
    test('addFirst', async () => {
        var response = await request(server)
            .post(API_URL)
            .send(contact1)
            .set('authorization', getTestUserAuthKey())
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(contact1.name);
        expect(response.body.email).toEqual(contact1.email);
        expect(response.body.phone).toEqual(contact1.phone);
        expect(response.body.customerId).toEqual(contact1.customerId);

        contactId1 = response.body.id;
    });

    // add second contact
    test('addSecond', async () => {
        var response = await request(server)
            .post(API_URL)
            .send(contact2)
            .set('authorization', getTestUserAuthKey())
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(contact2.name);
        expect(response.body.email).toEqual(contact2.email);
        expect(response.body.phone).toEqual(contact2.phone);
        expect(response.body.customerId).toEqual(contact2.customerId);

        contactId2 = response.body.id;
    });

    // add third contact
    test('addThird', async () => {
        var response = await request(server)
            .post(API_URL)
            .send(contact3)
            .set('authorization', getTestUserAuthKey())
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(contact3.name);
        expect(response.body.email).toEqual(contact3.email);
        expect(response.body.phone).toEqual(null);
        expect(response.body.customerId).toEqual(contact3.customerId);

        contactId3 = response.body.id;
    });

    // add first contact again, should generate an error
    test('addFirstAgain', async () => {
        var response = await request(server)
            .post(API_URL)
            .send(contact1)
            .set('authorization', getTestUserAuthKey())
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(409);
        expect(response.type).toEqual('application/json');
        expect(response.body.type).toEqual(
            'http://daikinlab.com/api_doc/public/index.html#Errors'
        );
        expect(response.body.title).toEqual('ALREADY_EXISTING_CONTACT');
        expect(response.body.detail).toEqual(
            'Contact with email: first@contact.com already existing'
        );
        expect(response.body.status).toEqual(response.status);
    });
});

// GET contacts
describe('contacts: get', () => {
    // get all contacts
    test('getAllContacts', async () => {
        var response = await request(server)
            .get(API_URL)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(3);

        expect(response.body[0].name).toEqual(contact1.name);
        expect(response.body[0].email).toEqual(contact1.email);
        expect(response.body[0].phone).toEqual(contact1.phone);
        expect(response.body[0].customerId).toEqual(contact1.customerId);

        expect(response.body[1].name).toEqual(contact2.name);
        expect(response.body[1].email).toEqual(contact2.email);
        expect(response.body[1].phone).toEqual(contact2.phone);
        expect(response.body[0].customerId).toEqual(contact1.customerId);

        expect(response.body[2].name).toEqual(contact3.name);
        expect(response.body[2].email).toEqual(contact3.email);
        expect(response.body[2].phone).toEqual(null);
        expect(response.body[2].customerId).toEqual(contact3.customerId);
    });

    // get all contacts
    test('firstPageSingle', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ page: 1, rows: 1 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(1);
    });

    test('firstPageDouble', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ page: 1, rows: 2 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(2);
    });

    test('firstPageQuad', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ page: 1, rows: 4 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(3);
    });

    test('SecondPageSingle', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ page: 2, rows: 1 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(1);
    });

    test('SecondPageDouble', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ page: 2, rows: 2 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(1);
    });

    test('ThirdPageDouble', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ page: 3, rows: 2 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(0);
    });

    test('SecondPageTriple', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ page: 2, rows: 3 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(0);
    });

    // get contact by the specified id
    test('getSpecifiedContact', async () => {
        var response = await request(server)
            .get(API_URL + '/' + contactId1)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(contact1.name);
        expect(response.body.email).toEqual(contact1.email);
        expect(response.body.phone).toEqual(contact1.phone);
    });

    // error when attempting to get a contact by invalid id
    test('getInvalidContact', async () => {
        var response = await request(server)
            .get(API_URL + '/' + INVALID_CONTACT)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(404);
        expect(response.body.title).toEqual('INVALID_CONTACT_ID');
        expect(response.body.detail).toContain(INVALID_CONTACT);
    });

    // make sure we can filter by customerId
    test('getCustomerContacts', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ customerId: firstCustomerId })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(2);
    });

    // make sure we can filter by customerId and rank
    test('getHigherRankContacts', async () => {
        var response = await request(server)
            .get(API_URL)
            .query({ customerId: firstCustomerId, rank: 5 })
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(1);
    });

    // get contact by the specified id
    test('getCustomerWithContacts', async () => {
        var response = await request(server)
            .get(CUSTOMER_CONTACTS_API_URL + '/1')
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });
});

// Update contact information
describe('contacts: put', () => {
    var newName = 'First Updated Contact';
    var newPhone = contact1.phone + 1;

    // update name
    test('UpdateName', async () => {
        var response = await request(server)
            .put(API_URL + '/' + contactId1)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json')
            .send({ name: newName })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(newName);
        expect(response.body.email).toEqual(contact1.email);
        expect(response.body.phone).toEqual(contact1.phone);
    });

    // update phone
    test('UpdatePhone', async () => {
        var response = await request(server)
            .put(API_URL + '/' + contactId1)
            .send({ phone: contact1.phone + 1 })
            .set('authorization', getTestUserAuthKey())
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(newName);
        expect(response.body.email).toEqual(contact1.email);
        expect(response.body.phone).toEqual(newPhone);
    });

    // update unknown contact
    test('UpdateInvalidContact', async () => {
        var response = await request(server)
            .put(API_URL + '/' + INVALID_CONTACT)
            .send({ phone: contact1.phone + 1 })
            .set('authorization', getTestUserAuthKey())
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(404);
        expect(response.type).toEqual('application/json');
        expect(response.body.type).toEqual(
            'http://daikinlab.com/api_doc/public/index.html#Errors'
        );
        expect(response.body.title).toEqual('INVALID_CONTACT_ID');
        expect(response.body.detail).toEqual(
            `Contact with Id: ${INVALID_CONTACT} does not exist`
        );
        expect(response.body.status).toEqual(response.status);
    });

    // get contact by the specified id
    test('getSpecifiedContact', async () => {
        var response = await request(server)
            .get(API_URL + '/' + contactId1)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(newName);
        expect(response.body.email).toEqual(contact1.email);
        expect(response.body.phone).toEqual(newPhone);
    });

    // update undefined phone
    test('UpdateUndefinedPhone', async () => {
        var response = await request(server)
            .put(API_URL + '/' + contactId1)
            .send({ phone: null })
            .set('authorization', getTestUserAuthKey())
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.name).toEqual(newName);
        expect(response.body.email).toEqual(contact1.email);
        expect(response.body.phone).toEqual(null);
    });
});

// Transaction support
describe('transaction', () => {
    const TRANSACTION_API = '/api/v1/upgrades';

    // commit
    test('commit', async () => {
        var response = await request(server)
            .post(TRANSACTION_API)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });

    // rollback
    test('rollback', async () => {
        var response = await request(server)
            .post(TRANSACTION_API)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(400);
    });
});

// GET customer views
describe('customerViews: get', () => {
    // get all customer views
    test('getAllCustomersWithContactCount', async () => {
        var response = await request(server)
            .get(CUSTOMER_VIEW_API_URL)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');

        expect(response.body.length).toEqual(2);
        expect(JSON.stringify(response.body[0])).toEqual(
            JSON.stringify(customer1WithContactCount)
        );
        expect(JSON.stringify(response.body[1])).toEqual(
            JSON.stringify(customer2WithContactCount)
        );
    });

    // get specific customer view record
    test('getSpecifiedCustomerView', async () => {
        var response = await request(server)
            .get(CUSTOMER_VIEW_API_URL + '/' + firstCustomerId)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });
});

// Update contact information
describe('contacts: delete', () => {
    // delete first
    test('deleteFirst', async () => {
        var response = await request(server)
            .delete(API_URL + '/' + contactId1)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });

    // delete second
    test('deleteSecond', async () => {
        var response = await request(server)
            .delete(API_URL + '/' + contactId2)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });

    // delete third
    test('deleteThird', async () => {
        var response = await request(server)
            .delete(API_URL + '/' + contactId3)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });
    // get all contacts
    test('allClear', async () => {
        var response = await request(server)
            .get(API_URL)
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.length).toEqual(0);
    });
});

// Get the service version
describe('version: get', () => {
    // Make sure the version is returning correct value
    test('versionFormat', async () => {
        var response = await request(server)
            .get('/version')
            .set('authorization', getTestUserAuthKey())
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);

        var currentModule = require('../package.json');
        expect(response.text).toEqual(currentModule.version);
    });
});

// Get the service /errors
describe('errors: get', () => {
    // Make sure the /errors endpoint is returning correct value
    test('errors', async () => {
        var response = await request(server)
            .get('/errors')
            .set('Accept', 'application/json');

        const expected =
            '\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                        <title>Error Codes For business-service-template</title>\n                        </head>\n                        <body>\n                        <h1>Error Codes For business-service-template</h1>\n                        <table border="1" cellspacing="0" cellpadding="5">\n    <thead>\n      <tr>\n        <th>Error Code</th>\n        <th>HTTP Status Code</th>\n        <th>Severity</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n                <td>INVALID_JWT_TOKEN</td>\n                <td>401</td>\n                <td>1</td>\n                <td>Invalid JWT token</td>\n            </tr><tr>\n                <td>INVALID_REQUEST</td>\n                <td>400</td>\n                <td>1</td>\n                <td>Request is invalid, {0}.</td>\n            </tr><tr>\n                <td>INTERNAL_ERROR</td>\n                <td>400</td>\n                <td>5</td>\n                <td>Internal Error</td>\n            </tr><tr>\n                <td>NO_ACCESS</td>\n                <td>403</td>\n                <td>1</td>\n                <td>Access Denied</td>\n            </tr><tr>\n                <td>INVALID_PAGE_STATE</td>\n                <td>400</td>\n                <td>1</td>\n                <td>Invalid pageState {0} specified</td>\n            </tr><tr>\n                <td>INVALID_ORDER_BY</td>\n                <td>400</td>\n                <td>1</td>\n                <td>Provided orderBy {0} is not valid</td>\n            </tr><tr>\n                <td>ALREADY_EXISTING_CONTACT</td>\n                <td>409</td>\n                <td>undefined</td>\n                <td>Contact with email: {0} already existing</td>\n            </tr><tr>\n                <td>INVALID_CONTACT_ID</td>\n                <td>404</td>\n                <td>undefined</td>\n                <td>Contact with Id: {0} does not exist</td>\n            </tr><tr>\n                <td>INVALID_CUSTOMER_ID</td>\n                <td>404</td>\n                <td>undefined</td>\n                <td>Customer with Id: {0} does not exist</td>\n            </tr>\n    </tbody>\n  </table>\n                        </body>\n                    </html>\n                    ';
        expect(response.status).toEqual(200);
        expect(response.text).toEqual(expected);
    });
});

// Get the service /config
describe('config: get', () => {
    // Make sure the /errors endpoint is returning correct value
    test('config', async () => {
        var response = await request(server)
            .get('/config')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
    });
});

// Make sure the API doc is available
describe('API-Doc: get', () => {
    // Make sure the version is returning correct value
    test('apidoc', async () => {
        var response = await request(server)
            .get('/apidocs')
            .set('Accept', 'application/json');

        expect(response.status).toEqual(200);
    });
});

// Make sure the service registry is available
describe('Service: registry', () => {
    // Make sure the version is returning correct value
    test('registry', async () => {
        expect(service.registry).toBeDefined();
        expect(service.registry.url).toBeDefined();
        expect(service.registry.url.equipmentManager).toBeDefined();
        expect(service.logger.defaultMeta.service).toEqual(service.name);
    });
});

// Make sure the service registry is available
describe('Service: logger', () => {
    // Make sure the version is returning correct value
    test('logger functions', async () => {
        expect(service.logger).toBeDefined();
        expect(service.logger.setLoggingContext).toBeDefined();
        expect(service.logger.getLoggingContext).toBeDefined();
    });

    // Make sure the get/set works for logging context
    test('logger context', async () => {
        let customLogContext = {
            mod: 'ule'
        };
        service.logger.setLoggingContext(customLogContext);

        expect(service.logger.getLoggingContext()).toEqual(customLogContext);
    });
});
