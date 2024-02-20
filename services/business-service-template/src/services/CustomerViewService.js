const AbstractRdbmsService = require('@daikin-zen/utility/lib/AbstractRdbmsService');

// Model pointing the database view
const MODEL_NAME = 'customerWithContactCountView';

class CustomerViewService extends AbstractRdbmsService {
    /**
     * getting model name for ORM
     * @returns {string} model name
     */
    getModelName() {
        return MODEL_NAME;
    }

    /* eslint-disable */
    /**
     * Create a model
     * @async
     * @method
     * @param {Object} domain of model
     * @param {Object} options search options
     * @returns {Promise<Object>} entity object
     */
    async create(domain, options = {}) {
        throw new Error('There is no create for view');
    }

    /**
     * Update a model
     * @async
     * @method
     * @param {Object} domain of model\
     * @param {Object} options search options
     * @returns {Promise<Object>} entity
     */
    async update(domain, options = {}) {
        throw new Error('There is no update for view');
    }

    /**
     * Delete a model by its id
     * @async
     * @method
     * @param {Object} domain of model
     * @param {Object} options search options
     * @returns {Promise<Object>} undefined
     */
    async delete(domain, options = {}) {
        throw new Error('There is no delete for view');
    }
}

module.exports = new CustomerViewService();
