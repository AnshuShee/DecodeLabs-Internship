/**
 * Orders Routing file
 * 
 * This file maps HTTP endpoints to specific controller functions.
 * It separates the "routing logic" from the "business logic".
 */

const express = require('express');
const router = express.Router();

// Import our controller logic
const ordersController = require('../controllers/ordersController');

// GET /api/orders
// Route to fetch all orders (with pagination)
router.get('/', ordersController.getAllOrders);

// GET /api/orders/:id
// Route to fetch a specific order by ID
router.get('/:id', ordersController.getOrderById);

// POST /api/orders
// Route to create a new order
router.post('/', ordersController.createOrder);

module.exports = router;
