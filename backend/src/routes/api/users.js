const express = require('express');
const ctrl = require("../../controllers/users");
const { validateBody, authenticate } = require("../../middlewares");


const { userSchemas } = require('../../models');

const router = express.Router();

router.post('/auth/register', validateBody(userSchemas.registerSchema),ctrl.register);
router.post('/auth/login', validateBody(userSchemas.loginSchema),ctrl.login);
router.get("/current", authenticate, ctrl.getCurrentUser)

module.exports = router;
