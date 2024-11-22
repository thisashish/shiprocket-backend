const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  order_date: { type: String, required: true },
  pickup_location: { type: String, required: true },
  channel_id: { type: Number },
  comment: { type: String },
  order_items: [{
    name: String,
    sku: String,
    units: Number,
    selling_price: Number,
    discount: Number,
    tax: Number,
    hsn: Number
  }],
  payment_method: { type: String },
  shipping_charges: { type: Number },
  giftwrap_charges: { type: Number },
  transaction_charges: { type: Number },
  total_discount: { type: Number },
  sub_total: { type: Number },
  length: { type: Number },
  breadth: { type: Number },
  height: { type: Number },
  weight: { type: Number },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
