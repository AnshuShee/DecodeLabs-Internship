const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrderByOrderID,
  updateOrder,
  deleteOrder
} = require('../controllers/orderController');

router.route('/')
  .get(getAllOrders)
  .post(createOrder);

router.route('/ref/:orderID')
  .get(getOrderByOrderID);

router.route('/:id')
  .get(getOrderById)
  .put(updateOrder)
  .delete(deleteOrder);

module.exports = router;
