<div align="center">
  <h1><img src="https://icongr.am/feather/code.svg?size=36&color=1e90ff" width="36" align="top"> DecodeLabs Backend Internship Portfolio</h1>
  <p><strong>A comprehensive collection of backend projects demonstrating scalable API design, database management, and secure authentication.</strong></p>
  
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
</div>

<br />

## <img src="https://icongr.am/feather/info.svg?size=24&color=1e90ff" width="24" align="top"> Overview

This repository serves as a showcase of my backend development journey during the **DecodeLabs Internship**. The repository is systematically structured into multiple iterative projects, evolving from foundational data management to a full-fledged secure authentication system.

---

## <img src="https://icongr.am/feather/layers.svg?size=24&color=1e90ff" width="24" align="top"> Repository Architecture

```text
DecodeLabs-Internship/
├── project-1/          # Data Curation & Organization
├── project-2/          # RESTful API Development & MongoDB Integration
└── project3/           # Advanced Secure Authentication System (JWT/RBAC)
```

---

## <img src="https://icongr.am/feather/grid.svg?size=24&color=1e90ff" width="24" align="top"> Projects Breakdown

### <img src="https://icongr.am/feather/database.svg?size=20&color=1e90ff" width="20" align="top"> [Project 1: Data Organization](./project-1)
Focused on foundational data processing, this project curates and structures raw e-commerce data.
- **Dataset**: Manages a massive JSON dataset (`Online-Store-Orders.json`) containing over 1,200 real-world e-commerce orders.
- **Data Points**: Structurally defines data models including `OrderID`, `Product`, `Quantity`, `UnitPrice`, `ShippingAddress`, and `PaymentMethod`.

### <img src="https://icongr.am/feather/link.svg?size=20&color=1e90ff" width="20" align="top"> [Project 2: Database-Integrated REST API](./project-2)
A fully functional REST API engineered on top of the dataset curated in Project 1.
- **Tech Stack**: Node.js, Express.js, MongoDB (Atlas), Mongoose
- **Core Features**:
  - **Mongoose Schemas**: Strict data validation matching e-commerce records.
  - **Automated Seeding**: Scripts to seamlessly populate MongoDB Atlas with local JSON data.
  - **CRUD Operations**: Comprehensive endpoints (`GET`, `POST`, `PUT`, `DELETE`) with support for dynamic filtering.
  - **Error Handling**: Standardized, production-grade API responses.

### <img src="https://icongr.am/feather/lock.svg?size=20&color=1e90ff" width="20" align="top"> [Project 3: Secure Authentication System](./project3)
An enterprise-grade authentication backend utilizing modern security best practices. It includes all core features and several advanced bonus implementations.
- **Tech Stack**: Node.js, Express.js, MongoDB, JWT (JSON Web Tokens), bcrypt
- **Core Features**:
  - **User Registration & Login**: `POST /api/auth/register` and `POST /api/auth/login` with `bcrypt` hashing.
  - **JWT Middleware**: Verifies tokens from `Authorization: Bearer <token>`.
  - **Protected Routes**: Secure `GET /api/user/profile` endpoint.
- **Bonus Features Included**:
  - **Role Based Access Control (RBAC)**: Added `role` to User model and an `/api/user/admin-only` route.
  - **Token Expiration**: JWT expires in 1 hour.
  - **Refresh Token Implementation**: `POST /api/auth/refresh` to get a new access token.
  - **Logout API**: `POST /api/auth/logout` to clear the refresh token.
  - **Password Reset Flow**: `POST /api/auth/forgotpassword` & `PUT /api/auth/resetpassword/:token`.
  - **Account Verification System**: Generates verification tokens. Test via `GET /api/auth/verifyemail/:token`.

---

## <img src="https://icongr.am/feather/terminal.svg?size=24&color=1e90ff" width="24" align="top"> Getting Started (Local Setup)

To run any of the projects locally, follow these general steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnshuShee/DecodeLabs-Internship.git
   ```

2. **Navigate to the target project directory:**
   ```bash
   cd project3 # Or project-2
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Environment Configuration:**
   Create a `.env` file in the project root. For `project3`, an example setup would look like this:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_uri_here
   JWT_SECRET=supersecretjwtkey_12345
   JWT_EXPIRE=1h
   JWT_REFRESH_SECRET=supersecretrefreshjwtkey_12345
   JWT_REFRESH_EXPIRE=7d
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev # Or 'node server.js'
   ```

---

## <img src="https://icongr.am/feather/check-circle.svg?size=24&color=1e90ff" width="24" align="top"> API Testing Instructions

### Project 2
- Run the server locally and use the `/api/orders` endpoints.
- You can populate the database via `npm run seed` before testing the APIs.

### Project 3
A Postman collection (`Auth-API-Collection.json`) is included in the `project3` root. 
1. Open Postman.
2. Click **Import** and select the `Auth-API-Collection.json` file.
3. You will see an "Auth API Project 3" collection with all endpoints pre-configured.

#### Testing Flow for Authentication:
1. **Register**: Send a `POST` request to `/api/auth/register`. 
   *(Check the terminal console; it will print a "mock email" link containing the verification token).*
2. **Verify Email**: Copy the token from the terminal output and paste it into the "Verify Email" GET request URL.
3. **Login**: Send a `POST` request to `/api/auth/login` to retrieve your JWT access token and refresh token.
4. **Access Protected Route**: Copy the access token and paste it into the "Authorization" header (Bearer Token) for the "Get Profile" GET request.
5. **Logout**: Use the "Logout" POST request to clear the refresh token.

---
<div align="center">
  <i>Developed with <img src="https://icongr.am/feather/heart.svg?size=16&color=ff4081" width="16" align="center"> during the DecodeLabs Internship</i>
</div>
