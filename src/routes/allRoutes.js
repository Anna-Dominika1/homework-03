const express = require('express');
const contactsController = require('../controllers/contactsController');

const router = express.Router();

router.get('/', contactsController.getAll);
router.post('/', contactsController.create);
router.get('/:id', contactsController.getById);
router.put('/:id', contactsController.update);
router.delete('/:id', contactsController.delete);
router.patch('/:contactId/favorite', contactsController.favorite);
module.exports = router;