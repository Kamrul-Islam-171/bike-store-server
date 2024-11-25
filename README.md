# Bike-Store-Server-Side


Live link : ()


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


