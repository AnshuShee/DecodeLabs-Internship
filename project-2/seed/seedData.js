require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Order = require('../models/Order');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const orders = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../project-1/Online-Store-Orders.json'), 'utf-8')
);

const importData = async () => {
  try {
    await connectDB();
    
    await Order.deleteMany();
    
    const formattedOrders = orders.map(order => ({
      orderID: order.OrderID,
      date: new Date(order.Date),
      customerID: order.CustomerID,
      product: order.Product,
      quantity: order.Quantity,
      unitPrice: order.UnitPrice,
      shippingAddress: order.ShippingAddress,
      paymentMethod: order.PaymentMethod,
      orderStatus: order.OrderStatus,
      trackingNumber: order.TrackingNumber,
      itemsInCart: order.ItemsInCart,
      couponCode: order.CouponCode,
      referralSource: order.ReferralSource,
      totalPrice: order.TotalPrice
    }));

    const insertedOrders = await Order.insertMany(formattedOrders);
    
    console.log(`Data Seeded Successfully! ${insertedOrders.length} records inserted.`);
    process.exit();
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

importData();
