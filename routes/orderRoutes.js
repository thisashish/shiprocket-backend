const express = require('express');
const { createOrder, getAllOrders, cancelOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/create', createOrder);
router.get('/', getAllOrders);
router.delete('/:orderId', cancelOrder);

module.exports = router;
