const ExtendedModelBase = require('@daikin-zen/utility/lib/ExtendedModelBase');
const bookshelf = service.db.psql.getORM();

class CustomerModel extends ExtendedModelBase {
    get tableName() {
        return 'customer';
    }

    get hasTimestamps() {
        return ['createdAt', 'updatedAt'];
    }

    contact() {
        return this.hasMany(service.db.getModel('contact'), 'customerId');
    }
}

module.exports = bookshelf.model('CustomerModel', CustomerModel);
