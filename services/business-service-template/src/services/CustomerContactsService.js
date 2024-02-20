const AbstractRdbmsService = require('@daikin-zen/utility/lib/AbstractRdbmsService');
const { throwNestedError } = require('@daikin-zen/logger');
// Model that this service is dealing with
const MODEL_NAME = 'customer';

class CustomerContactsService extends AbstractRdbmsService {
    getModelName() {
        return MODEL_NAME;
    }
    /**
     * Get a contacts for the specified customer
     * @param {ObjectId} customerId id of the customer
     * @returns {Promise} promise to retrieve the contacts by the specified customer id
     */
    async getCustomerWithItsContacts(customerId) {
        try {
            return super.getByID({ id: customerId }, { withRelated: ['contact'] });
        } catch (error) {
            service.logger.error(
                'CustomerContactsService.getCustomerWithItsContacts:',
                error
            );
            throwNestedError(
                'CustomerContactsService.getCustomerWithItsContacts:',
                error
            );
        }
    }
}

module.exports = new CustomerContactsService();
