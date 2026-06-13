require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const orderRoutes = require('./routes/orderRoutes');

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// Mount routes
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
