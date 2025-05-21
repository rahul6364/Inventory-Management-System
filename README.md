# Inventory Management System

A backend inventory management system built with Node.js, Express.js, and MongoDB to support a shopping cart website.

## Features

- Create, Read, Update, and Delete (CRUD) operations for products
- Real-time inventory tracking
- Low stock alerts
- Restock functionality
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
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
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/inventory_db
LOW_STOCK_THRESHOLD=10
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Products

- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product
- `POST /api/products/:id/restock` - Restock a product
- `GET /api/products/low-stock` - Get low stock products

### Example Product Object

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "quantity": 50
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages in case of failures:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## Project Structure

```
inventory-management-system/
├── models/
│   └── Product.js
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── server.js
├── package.json
└── README.md
``` 