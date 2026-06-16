# Project 3: Secure Authentication System

This project is a complete secure authentication backend built with Node.js, Express, MongoDB, and JWT. It includes all the core features and requested bonus features.

## Core Features
- **User Registration**: `POST /api/auth/register` (Hashes password with bcrypt)
- **User Login**: `POST /api/auth/login` (Returns JWT token)
- **Authentication Middleware**: Verifies token from `Authorization: Bearer <token>`
- **Protected Routes**: `GET /api/user/profile`

## Bonus Features Included
- **Role Based Access Control (RBAC)**: Added `role` to User model. Added `/api/user/admin-only` route.
- **Token Expiration**: JWT expires in 1 hour (configurable in `.env`).
- **Refresh Token Implementation**: `POST /api/auth/refresh` to get a new access token.
- **Logout API**: `POST /api/auth/logout` to clear the refresh token.
- **Password Reset API**: `POST /api/auth/forgotpassword` & `PUT /api/auth/resetpassword/:token`
- **Account Verification System**: Generates a verification token on registration. Test via `GET /api/auth/verifyemail/:token`.

## Project Structure
```text
project3/
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
│
├── .env
├── server.js
├── package.json
└── Auth-API-Collection.json
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   A `.env` file has already been generated with the following configuration:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://anshushee2000_db_user:Anshu2007@cluster0.ud2g4rz.mongodb.net/?appName=Cluster0
   JWT_SECRET=supersecretjwtkey_12345
   JWT_EXPIRE=1h
   JWT_REFRESH_SECRET=supersecretrefreshjwtkey_12345
   JWT_REFRESH_EXPIRE=7d
   ```

3. **Start the Server**:
   ```bash
   node server.js
   ```

## Testing Instructions

A Postman collection (`Auth-API-Collection.json`) is included in the project root. 
1. Open Postman.
2. Click **Import** and select the `Auth-API-Collection.json` file.
3. You will see an "Auth API Project 3" collection with all endpoints pre-configured.

### Testing Flow
1. **Register**: Send a `POST` request to `/api/auth/register`. 
   - Check the terminal console; it will print a "mock email" link containing the verification token.
2. **Verify Email**: Copy the token from the terminal output and paste it into the "Verify Email" GET request URL.
3. **Login**: Send a `POST` request to `/api/auth/login` to retrieve your JWT access token and refresh token.
4. **Access Protected Route**: Copy the access token and paste it into the "Authorization" header (Bearer Token) for the "Get Profile" GET request.
5. **Logout**: Use the "Logout" POST request to clear the refresh token.
