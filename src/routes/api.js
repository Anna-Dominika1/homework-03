const express = require('express');

const contactsRouter = require('./allRoutes.js');

const router = express.Router();

router.use('/contacts', contactsRouter);

module.exports = router;