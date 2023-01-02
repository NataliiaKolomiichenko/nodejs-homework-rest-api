const express = require('express');
const ctrlAuth = require('../../controller/auth')
const { userJoiSchemas } = require('../../schemas');
const { validateBody, authenticate } = require('../../middlewares')

const router = express.Router();

router.post('/users/signup', validateBody(userJoiSchemas.schema), ctrlAuth.register);

router.post('/users/login', validateBody(userJoiSchemas.schema), ctrlAuth.login);

router.get('/users/current', authenticate, ctrlAuth.getCurrent);

router.post('/users/logout', authenticate, ctrlAuth.logout);

module.exports = router;