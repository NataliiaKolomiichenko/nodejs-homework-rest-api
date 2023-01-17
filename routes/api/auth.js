const express = require('express');
const ctrlAuth = require('../../controller/auth')
const { userJoiSchemas } = require('../../schemas');
const { validateBody, authenticate, upload } = require('../../middlewares')

const router = express.Router();

router.post('/users/signup', validateBody(userJoiSchemas.schema), ctrlAuth.register);

router.get('/users/verify/:verificationToken', ctrlAuth.verify);

router.get('/users/verify/:verificationToken', validateBody(userJoiSchemas.emailSchema), ctrlAuth.resendVerifyEmail);

router.post('/users/login', validateBody(userJoiSchemas.schema), ctrlAuth.login);

router.get('/users/current', authenticate, ctrlAuth.getCurrent);

router.post('/users/logout', authenticate, ctrlAuth.logout);

router.patch('/users/avatars', authenticate, upload.single("avatar"), ctrlAuth.updateAvatar);

module.exports = router;