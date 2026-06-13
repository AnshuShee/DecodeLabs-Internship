/**
 * Orders Controller
 * 
 * Contains the business logic for handling order-related requests.
 */

const Order = require('../models/Order');

/**
 * GET /api/orders
 * Returns a list of orders. We use basic pagination (limit) because the dataset is large.
 */
exports.getAllOrders = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const orders = await Order.findAll(limit);
    const totalOrders = await Order.countAll();
    
    // Send a structured JSON response
    res.status(200).json({
      status: 'success',
      results: limit,
      totalOrders,
      data: orders
    });
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve orders from the database.'
    });
  }
};

/**
 * GET /api/orders/:id
 * Returns a single order based on the OrderID provided in the URL params.
 */
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({
        status: 'fail',
        message: `Order with ID ${orderId} not found.`
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: order
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve order.'
    });
  }
};

/**
 * POST /api/orders
 * Creates a new order. To protect the original dataset during practice,
 * we keep the new data in memory/send a mock success instead of writing to the 18k+ line file.
 */
exports.createOrder = (req, res) => {
  const { CustomerID, Product, Quantity, UnitPrice, ShippingAddress } = req.body;
  
  // Basic Validation
  if (!CustomerID || !Product || !Quantity || !UnitPrice) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing required fields. Please provide CustomerID, Product, Quantity, and UnitPrice.'
    });
  }

  // Create a mock new order
  const newOrder = {
    OrderID: `ORD${Math.floor(Math.random() * 900000) + 100000}`, // Generate random ID
    Date: new Date().toISOString().split('T')[0],
    CustomerID,
    Product,
    Quantity,
    UnitPrice,
    ShippingAddress: ShippingAddress || "Not Provided",
    OrderStatus: "Pending",
    TotalPrice: Quantity * UnitPrice
  };

  // Structured response for successful creation (201 Created)
  res.status(201).json({
    status: 'success',
    message: 'Order created successfully (Mock mode: Data not saved to file)',
    data: newOrder
  });
};
