# This is the code for the GraphQL Studio Sandbox.
### Copy & paste it, to do some enpoint testing


####### Product endpoints below #######

# POST /products - Create a new product
mutation {
  addProduct(
    input: {
      product_id: "004",
      name: "Camping Stove",
      description: "A portable stove for outdoor cooking",
      price: 89.99
    }
  ) {
    product_id
    name
    description
    price
  }
}

# GET /products - Get all products
query {
  getAllProducts{
    product_id
    name
    price
  }
}

# GET /products/:id - Get a speciﬁc product by ID
query {
  getProductById(product_id: "001"){
    product_id
    name
    description
    price
  }
}

# PUT /products/:id - Update a product by ID
mutation{
  updateProductById(
    product_id: "001"
    input: {
      name: "Outdoor Tent -updated-",
      price: 999.99
      }
    ){
      product_id
      name
      description
      price
    }
}

# DELETE /products/:id - Delete a product by ID
mutation {
  deleteProductById(
    product_id: "001") {
      product_id
      name
    }
}

####### Order endpoints below #######

# POST /orders - Create a new order
mutation {
  addOrder(order_id: "1004", products: ["001", "002"]) {
    order_id
    products {
      product_id
      name
    }
  }
}

# GET /orders - Get all orders
query {
  getAllOrders {
    order_id
    products {
      product_id
      name
    }
  }
}

# GET /orders/:id - Get a speciﬁc order by ID
query {
  getOrderById(order_id: "1002"){
    order_id
    products {
      product_id
      name
    }
  }
}

# PUT /orders/:id
mutation {
  updateOrderById(order_id: "1004", products: ["002", "003"]) {
    order_id
    products {
      product_id
      name
    }
  }
}

# DELETE /orders/:id - Delete an order by ID
mutation {
  deleteOrderById(
    order_id: "1001") {
      order_id
    }
}