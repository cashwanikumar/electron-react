import express from 'express';
const controller = require('../controllers');

const router = express.Router();

router.get('/items', controller.groceryListController.getlist);
router.post('/items', controller.groceryListController.createlist);

module.exports = router;