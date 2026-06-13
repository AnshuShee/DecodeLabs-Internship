# REST API Fundamentals - DecodeLabs Project 1

Welcome to your essential start: REST API Fundamentals. This project establishes the core communication layer of the web through pure routing logic.

## 🚀 Step-by-Step Setup Instructions

1. **Install Dependencies**
   Navigate to the project folder (`DecodeLabs-Intership`) in your terminal and run:
   ```bash
   npm install
   ```
   This will install `express`, which is our minimal routing framework.

2. **Start the Server**
   Run the following command to boot up the local Express server:
   ```bash
   npm start
   ```
   You should see: `Server is running locally on http://localhost:3000`

## 🧠 Core Concepts Explained

- **Routing:** The process of determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).
- **HTTP Methods:** 
  - `GET`: Used to request data from a specified resource.
  - `POST`: Used to send data to a server to create/update a resource.
- **Request Body (`req.body`):** When sending a POST request, the data is sent in the "body" of the request. We use `express.json()` middleware to parse this incoming data.
- **Response (`res`):** The data sent back from the server to the client. In our case, we send back **structured JSON data** representing our store's orders.
- **Stateless Communication:** Each request from client to server must contain all of the information necessary to understand the request. The server does not store any state about the client session on the server side.

## 🧪 Example API Requests (Using Postman or CURL)

### 1. Get All Orders (GET)
**Endpoint:** `http://localhost:3000/api/orders`
**Description:** Fetches a list of orders (limited to 10 by default to handle the large dataset).

**Expected JSON Response (200 OK):**
```json
{
  "status": "success",
  "results": 10,
  "totalOrders": 18893,
  "data": [
    {
      "OrderID": "ORD200000",
      "Date": "2023-01-04",
      "CustomerID": "C72649",
      "Product": "Monitor",
      "Quantity": 5,
      "UnitPrice": 570.62,
      "ShippingAddress": "928 Main St",
      "OrderStatus": "Shipped"
    }
    // ...
  ]
}
```

### 2. Get Single Order by ID (GET)
**Endpoint:** `http://localhost:3000/api/orders/ORD200001`

**Expected JSON Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "OrderID": "ORD200001",
    "Date": "2024-08-23",
    "CustomerID": "C75739",
    "Product": "Phone",
    "Quantity": 2,
    "UnitPrice": 151.35
  }
}
```

### 3. Create a New Order (POST)
**Endpoint:** `http://localhost:3000/api/orders`
**Headers:** `Content-Type: application/json`
**Body:**
```json
{
  "CustomerID": "C12345",
  "Product": "Mechanical Keyboard",
  "Quantity": 1,
  "UnitPrice": 120.50,
  "ShippingAddress": "123 Dev Lane"
}
```

**Expected JSON Response (201 Created):**
```json
{
  "status": "success",
  "message": "Order created successfully (Mock mode: Data not saved to file)",
  "data": {
    "OrderID": "ORD847291",
    "Date": "2026-06-08",
    "CustomerID": "C12345",
    "Product": "Mechanical Keyboard",
    "Quantity": 1,
    "UnitPrice": 120.5,
    "ShippingAddress": "123 Dev Lane",
    "OrderStatus": "Pending",
    "TotalPrice": 120.5
  }
}
```

## 🔮 Future Improvements

As you master these fundamentals, here is how you can level up this project:
1. **MongoDB Integration:** Instead of reading from a local JSON file, connect to a NoSQL database using Mongoose.
2. **PUT/PATCH Routes:** Allow updating an existing order's status (e.g., from "Pending" to "Shipped").
3. **DELETE Routes:** Allow removing an order from the database.
4. **Middleware:** Add custom middleware for request logging (e.g., Morgan) and error handling.
5. **Authentication:** Implement JWT (JSON Web Tokens) to secure the POST routes so only authorized users can create orders.
