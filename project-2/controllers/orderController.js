const Order = require('../models/Order');
const mongoose = require('mongoose');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { orderID, trackingNumber } = req.body;

    const orderExists = await Order.findOne({ orderID });
    if (orderExists) {
      return res.status(400).json({ success: false, message: 'Order ID already exists' });
    }

    const trackingExists = await Order.findOne({ trackingNumber });
    if (trackingExists) {
      return res.status(400).json({ success: false, message: 'Tracking number already exists' });
    }

    const order = await Order.create(req.body);
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const { status, product, customerID, paymentMethod } = req.query;
    
    const filter = {};
    if (status) filter.orderStatus = status;
    if (product) filter.product = product;
    if (customerID) filter.customerID = customerID;
    if (paymentMethod) filter.paymentMethod = paymentMethod;

    const orders = await Order.find(filter);
    res.status(200).json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single order by MongoDB _id
exports.getOrderById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid order ID' });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single order by orderID field
exports.getOrderByOrderID = async (req, res) => {
  try {
    const order = await Order.findOne({ orderID: req.params.orderID });
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update order
exports.updateOrder = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid order ID' });
    }

    const { orderStatus, shippingAddress, quantity, couponCode } = req.body;
    
    const updateData = {};
    if (orderStatus) updateData.orderStatus = orderStatus;
    if (shippingAddress) updateData.shippingAddress = shippingAddress;
    if (quantity) updateData.quantity = quantity;
    if (couponCode !== undefined) updateData.couponCode = couponCode;

    const order = await Order.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete order
exports.deleteOrder = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid order ID' });
    }

    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
