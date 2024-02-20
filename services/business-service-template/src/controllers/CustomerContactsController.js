const CustomerContactsService = require('../services/CustomerContactsService');

/**
 * @description: Customer Contacts Controller
 */

class CustomerContactsController {
    /**
     * @description Get the CustomerView by specified ID as a parameter
     *
     * @param {Context} ctx application context with id as a param
     *
     * @returns {void}
     */
    async getByID(ctx) {
        var id = ctx.params.id;
        try {
            const found = await CustomerContactsService.getCustomerWithItsContacts(id);
            if (found) {
                ctx.body = found;
            } else {
                throw service.error.errorCodes.INVALID_CUSTOMER_ID;
            }
        } catch (error) {
            service.logger.error(
                'CustomerContactsController:getByID:',
                JSON.stringify(error)
            );
            ctx.body = service.error.format(ctx, error, [id]);
        }
    }
}

module.exports = new CustomerContactsController();
