# DecodeLabs Internship Projects

This repository contains my projects for the DecodeLabs backend internship. It is divided into two main projects demonstrating data organization and the development of a complete database-integrated REST API using Node.js, Express, and MongoDB.

## Repository Structure

```
DecodeLabs-Internship/
├── project-1/
│   ├── Online-Store-Orders.json   # Raw data containing 1200+ order records
│   ├── README.md
│   └── src/
└── project-2/
    ├── config/                    # Database configuration
    ├── controllers/               # Express route controllers
    ├── models/                    # Mongoose schemas
    ├── routes/                    # API routes definition
    ├── seed/                      # Database seeding scripts
    ├── server.js                  # Main application entry point
    └── package.json               # Node.js dependencies and scripts
```

## Project 1: Data Organization
The first project focuses on organizing raw e-commerce data. 
- Contains a large JSON dataset (`Online-Store-Orders.json`) with over 1200 real-world store orders.
- Each order includes details like `OrderID`, `Product`, `Quantity`, `UnitPrice`, `ShippingAddress`, `PaymentMethod`, `OrderStatus`, and more.

## Project 2: Database-Integrated REST API
The second project is a fully functional REST API built on top of the data from Project 1.

### Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **ODM**: Mongoose

### Features
- **Mongoose Models**: Strict schema validation matching the e-commerce data structure.
- **Database Seeding**: Automated script to read the local JSON file and populate the MongoDB Atlas database.
- **RESTful Endpoints**:
  - `POST /api/orders` - Create a new order.
  - `GET /api/orders` - Retrieve all orders (supports filtering by `status`, `product`, `customerID`, `paymentMethod`).
  - `GET /api/orders/:id` - Fetch an order by its MongoDB `_id`.
  - `GET /api/orders/ref/:orderID` - Fetch an order by its unique `OrderID`.
  - `PUT /api/orders/:id` - Update an order's status, shipping address, quantity, or coupon code.
  - `DELETE /api/orders/:id` - Delete an order.
- **Robust Error Handling**: Standardized JSON responses and status codes for duplicates, invalid IDs, and missing resources.

### Running Project 2 Locally

1. Navigate to the `project-2` directory:
   ```bash
   cd project-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Create a `.env` file in `project-2/` and add your MongoDB Atlas URI:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_uri_here
   ```

4. Seed the database (Optional, but recommended for testing):
   ```bash
   npm run seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The server will start running on `http://localhost:5000`. You can now use tools like Postman or Thunder Client to interact with the API.
