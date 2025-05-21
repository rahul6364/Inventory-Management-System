# Inventory Management System

A full-stack inventory management system built with Node.js, Express.js, and MongoDB, featuring user authentication and role-based access control.

## Features

- **User Authentication**
  - User registration and login
  - Role-based access control (Admin/User)
  - JWT-based authentication
  - Secure password hashing

- **Product Management**
  - Create, Read, Update, and Delete (CRUD) operations for products
  - Real-time inventory tracking
  - Low stock alerts
  - Restock functionality
  - Admin-only product modifications

- **User Interface**
  - Responsive design using Bootstrap 5
  - Separate pages for authentication and product management
  - Intuitive navigation
  - Role-based UI elements

## Tech Stack

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - bcryptjs for password hashing

- **Frontend**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Bootstrap 5
  - Bootstrap Icons

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd inventory-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
LOW_STOCK_THRESHOLD=10
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Usage

1. Access the application at `http://localhost:3000`

2. Register a new account:
   - The first user to register becomes an admin
   - Subsequent users are registered as regular users

3. Login with your credentials

4. Admin Features:
   - Add new products
   - Edit existing products
   - Delete products
   - View all products

5. Regular User Features:
   - View all products
   - No modification rights

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product (Admin only)
- `GET /api/products/:id` - Get a specific product
- `PUT /api/products/:id` - Update a product (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)
- `POST /api/products/:id/restock` - Restock a product (Admin only)
- `GET /api/products/low-stock` - Get low stock products (Admin only)

## Project Structure

```
inventory-management-system/
├── controllers/
│   ├── authController.js
│   └── productController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Product.js
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── public/
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   └── products.html
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Security Features

- Password hashing using bcryptjs
- JWT-based authentication
- Protected routes with middleware
- Role-based access control
- Environment variables for sensitive data
- CORS enabled
- Input validation

## Error Handling

The API returns appropriate HTTP status codes and error messages:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 