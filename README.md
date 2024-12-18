# Bike-Store-Server-Side


Live link : (https://level-2-bike-store-backend.vercel.app/)


## Key Features

## 1. Product Management

**Create a Bike**:
Add new bikes to the product catalog with complete details (name, brand, price, category, description, quantity, inStock).
Enum validation for the category field ensures only predefined values (Mountain, Road, Hybrid, Electric).

**Retrieve All Bikes**:
Fetch a list of all bikes with their details.

**Retrieve Specific Bike**:
Fetch details of a single bike using its unique productId.

**Update a Bike**:
Modify details such as price and quantity.
Automatically updates the updatedAt timestamp to reflect changes.

**Delete a Bike**:
Remove a bike from the catalog using its unique productId.

## 2. Order Management

**Place an Order**:
Validate stock availability before placing an order.
Reduce the bike's quantity in the inventory.
Automatically set inStock to false if the quantity becomes 0.

**Calculate Revenue:**
Calculates the Revenue for orders.


## Setup Environment Variables
1. Create a .env file in the root of the project.
2. Add the following environment variables:
    1. MONGO_URI - Your MongoDB connection URI (e.g., mongodb://localhost:27017/bike-store)
    2. PORT - The port your Express server should listen to (default is 3000)


## Install Dependencies
Make sure you're in the project directory:

```bash

cd bike-store-api
```

Install the necessary Node.js packages:

```Copy code
npm install
```

Running the Application
Start the backend server:

```Copy code
npm start
```

The server should now be running at http://localhost:3000.


## Endpoints

## Products:
1. Create a Bike: POST /api/products
2. Get All Bikes: GET /api/products
3. Get Specific Bike: GET /api/products/:productId
4. Update a Bike: PUT /api/products/:productId
5. Delete a Bike: DELETE /api/products/:productId

## Orders:
1. Create Order: POST /api/orders
2. Get Orders Revenue: GET /api/orders/revenue


