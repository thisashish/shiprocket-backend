const Order = require('../models/orderModel');
const shiprocketService = require('../services/shiprocketService');

const createOrder = async (req, res) => {
  const orderData = req.body;
  try {
    const createdOrder = await shiprocketService.createOrder(orderData);
    const order = new Order(createdOrder);
    await order.save();
    res.status(201).json({ success: true, order: createdOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const cancelOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const response = await shiprocketService.cancelOrder(orderId);
    if (response.success) {
      await Order.deleteOne({ orderId });
      res.status(200).json({ success: true, message: 'Order cancelled successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Failed to cancel order' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createOrder, getAllOrders, cancelOrder };
