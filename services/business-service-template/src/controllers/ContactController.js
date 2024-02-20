const { helper } = require('@daikin-zen/utility');

const ContactService = require('../services/ContactService');

/**
 * @description: Daikin Contact Controller
 */

class ContactController {
    /**
     * @description Paginate available contacts
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
            const result = await ContactService.search(criteria, options);
            helper.setPaginationHeaders(result, ctx);
            ctx.body = result.rows;
        } catch (error) {
            service.logger.error(
                `ContactController.search: data=${JSON.stringify(ctx.query)}`,
                error
            );
            ctx.body = service.error.format(ctx, error);
        }
    }

    /**
     * @description Create a new contact using the request body
     *
     * @param {Context} ctx application context with body holding the JSON.
     *
     * @returns {void}
     */
    async create(ctx) {
        var contactObj = ctx.request.body;

        try {
            contactObj.createdBy = ctx.userContext.userID;
            ctx.body = await ContactService.create(contactObj);
        } catch (error) {
            service.logger.error('ContactController:create:', JSON.stringify(error));
            ctx.body = service.error.format(ctx, error, [contactObj.email]);
        }
    }

    /**
     * @description Get the contact by specified ID as a parameter
     *
     * @param {Context} ctx application context with id as a param
     *
     * @returns {void}
     */
    async getByID(ctx) {
        var id = ctx.params.id;
        try {
            const found = await ContactService.getByID(id);
            if (!found) {
                throw service.error.errorCodes.INVALID_CONTACT_ID;
            }
            ctx.body = found;
        } catch (error) {
            ctx.body = service.error.format(ctx, error, [id]);
        }
    }

    /**
     * @description Update the contact identified by the parameter with the information
     * in the request body.
     *
     * @param {Context} ctx application context with id as a parameter
     *  and the update information in the body
     *
     * @returns {void}
     */
    async update(ctx) {
        try {
            const found = await ContactService.getByID(ctx.params.id);
            if (found) {
                const patchObject = Object.assign(found, ctx.request.body);
                patchObject.updatedBy = ctx.userContext.userID;
                ctx.body = await ContactService.update(patchObject);
            } else {
                throw service.error.errorCodes.INVALID_CONTACT_ID;
            }
        } catch (error) {
            service.logger.error(
                `ContactController.update: id=${ctx.params.id}, data=${JSON.stringify(
                    ctx.request.body
                )}`,
                error
            );
            ctx.body = service.error.format(ctx, error, [ctx.params.id]);
        }
    }

    /**
     * @description Delete the contact identified by the parameter
     *
     * @param {Context} ctx application context with id as a param

     * @returns {void}
     */
    async delete(ctx) {
        try {
            const found = await ContactService.getByID(ctx.params.id);
            if (found) {
                await ContactService.delete(found);
                ctx.body = found;
            } else {
                throw service.error.errorCodes.INVALID_CONTACT_ID;
            }
        } catch (error) {
            service.logger.error(`ContactController.delete: id=${ctx.params.id}`, error);
            ctx.body = service.error.format(ctx, error, [ctx.params.id]);
        }
    }

    /**
     * @description Upgrade the rank values of all the contacts, unless anybody has rank
     * above 5 in which case all changes will be rolled back.
     *
     * @param {Context} ctx application context
     *
     * @returns {void}
     */
    async upgrade(ctx) {
        try {
            ctx.body = await ContactService.upgrade();
        } catch (error) {
            service.logger.error('ContactController:upgrade:', JSON.stringify(error));
            ctx.body = service.error.format(ctx, error);
        }
    }
}

module.exports = new ContactController();
