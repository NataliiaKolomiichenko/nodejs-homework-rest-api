const express = require('express')
const ctrlContacts = require('../../controller/contacts');
const { contactJoiSchemas } = require('../../schemas');
const { validateBody, isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, ctrlContacts.get)

router.get('/:contactId', authenticate, isValidId, ctrlContacts.getById)

router.post('/', authenticate, validateBody(contactJoiSchemas.addSchema), ctrlContacts.add)

router.delete('/:contactId', authenticate, isValidId, ctrlContacts.remove)

router.put('/:contactId', authenticate, isValidId, validateBody(contactJoiSchemas.addSchema), ctrlContacts.update)

router.patch("/:contactId/favorite", authenticate, isValidId, validateBody(contactJoiSchemas.updateFavoriteSchema), ctrlContacts.updateStatusContact)

module.exports = router
