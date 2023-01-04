const get = require('../contacts/get');
const getById = require('../contacts/getById');
const add = require('../contacts/add');
const remove = require('../contacts/remove');
const update = require('../contacts/update');
const updateStatusContact = require('../contacts/updateStatusContact');

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
    updateStatusContact,
};