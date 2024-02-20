const CustomerViewService = require('../services/CustomerViewService');
const { helper } = require('@daikin-zen/utility');

/**
 * @description: Customer View Controller
 */

class CustomerViewController {
    /**
     * @description Paginate available customers with their contact counts
     *
     * @param {Context} ctx application context with query paramters page and rows.
     *
     * @returns {void}
     */
    async search(ctx) {
        const { rows, page, disableCount, ...criteria } = ctx.query;
        try {
            const options = service.validator.schemaValidate(
                service.validator.optionSchema,
                {
                    rows: rows,
                    page: page,
                    disableCount: disableCount
                }
            );
            const result = await CustomerViewService.search(criteria, options);
            helper.setPaginationHeaders(result, ctx);
            ctx.body = result.rows;
        } catch (error) {
            service.logger.error(
                `CustomerViewController.search: data=${JSON.stringify(ctx.query)}`,
                error
            );
            ctx.body = service.error.format(ctx, error);
        }
    }

    /**
     * @description Get the CustomerView by specified ID as a parameter
     *
     * @param {Context} ctx application context with id as a param
     *
     * @returns {void}
     */
    async getByID(ctx) {
        try {
            const found = await CustomerViewService.getByID(ctx.params.id);
            if (found) {
                ctx.body = found;
            } else {
                throw service.error.errorCodes.INVALID_CUSTOMER_ID;
            }
        } catch (error) {
            service.logger.error('CustomerViewController.getByID:', error);
            ctx.body = service.error.format(ctx, error, [ctx.params.id]);
        }
    }
}

module.exports = new CustomerViewController();
