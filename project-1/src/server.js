/**
 * REST API Fundamentals - DecodeLabs
 * 
 * This is the entry point for our Express application.
 * It sets up the server, middleware, and routes.
 */

const express = require('express');
const ordersRoutes = require('./routes/orders');

// Initialize the Express app
const app = express();

// Port configuration
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests (req.body)
app.use(express.json());

// A simple GET route for the root URL
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the DecodeLabs REST API!',
    status: 'success'
  });
});

// Mount the orders router for all routes starting with /api/orders
app.use('/api/orders', ordersRoutes);

// Catch-all route for undefined endpoints (404 Not Found)
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    status: 'fail'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running locally on http://localhost:${PORT}`);
});
