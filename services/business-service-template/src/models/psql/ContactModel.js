'use strict';

const ExtendedModelBase = require('@daikin-zen/utility/lib/ExtendedModelBase');
const bookshelf = service.db.psql.getORM();

/**
 * @description Alert History Model Class
 */
class ContactModel extends ExtendedModelBase {
    get tableName() {
        return 'contact';
    }

    get hasTimestamps() {
        return ['createdAt', 'updatedAt'];
    }

    customer() {
        return this.belongsTo(service.db.getModel('customer'), 'customerId');
    }
}

module.exports = bookshelf.model('ContactModel', ContactModel);
