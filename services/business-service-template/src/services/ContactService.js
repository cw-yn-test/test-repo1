const AbstractRdbmsService = require('@daikin-zen/utility/lib/AbstractRdbmsService');
// Model that this service is dealing with
const MODEL_NAME = 'contact';

class ContactService extends AbstractRdbmsService {
    /**
     * getting model name for ORM
     * @returns {string} model name
     */
    getModelName() {
        return MODEL_NAME;
    }

    /**
     * Create a model
     * @async
     * @method
     * @param {Object} domain of model
     * @param {Object} options search options
     * @returns {Promise<Object>} entity object
     */
    async create(domain, options = {}) {
        return super.create(domain, {
            ...options,
            errorCode: service.error.errorCodes.ALREADY_EXISTING_CONTACT
        });
    }

    /**
     * Get a contact by the specified email
     * @param {Email} email email of the Contact to get
     * @returns {Promise} promise to retrieve the contact by the specified email
     */
    getByEmail(email) {
        return service.db.psql.bFindOne(this.getModelName(), { email: email });
    }

    /**
     * Upgrade the rank values of all the contacts, unless anybody has rank
     * above 5 in which case all changes will be rolled back.
     *
     * @returns {Promise} promise to delete the contact
     */
    async upgrade() {
        // only interested in the first 100
        const page = await this.search({}, { page: 1, rows: 100 });
        const contacts = page.rows;
        const orm = service.db.psql.getORM();
        // start transaction

        return await orm.transaction(async (tx) => {
            let upgradePromises = [];
            const options = { transacting: tx };
            contacts.forEach((contact) => {
                if (contact.rank > 5) {
                    upgradePromises.push(Promise.reject('max rank exceeded'));
                } else {
                    contact.rank++;
                    upgradePromises.push(this.update(contact, options));
                }
            });

            return Promise.all(upgradePromises);
        });
    }
}

module.exports = new ContactService();
