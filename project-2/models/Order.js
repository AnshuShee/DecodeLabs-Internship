const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  customerID: {
    type: String,
    required: true,
    trim: true
  },
  product: {
    type: String,
    required: true,
    enum: ['Monitor', 'Phone', 'Tablet', 'Chair', 'Printer', 'Laptop', 'Desk']
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 0
  },
  shippingAddress: {
    type: String,
    required: true,
    trim: true
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['Debit Card', 'Credit Card', 'Online', 'Cash', 'Gift Card']
  },
  orderStatus: {
    type: String,
    required: true,
    enum: ['Shipped', 'Delivered', 'Cancelled', 'Returned', 'Pending'],
    default: 'Pending'
  },
  trackingNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  itemsInCart: {
    type: Number,
    required: true,
    min: 1
  },
  couponCode: {
    type: String,
    enum: ['SAVE10', 'FREESHIP', 'WINTER15'],
    default: null
  },
  referralSource: {
    type: String,
    required: true,
    enum: ['Instagram', 'Facebook', 'Google', 'Email', 'Referral']
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
