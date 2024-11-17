const { gql } = require("apollo-server-express");

// creating the schema
const schema = gql`
  type Product {
    product_id: ID!
    name: String!
    description: String!
    price: Float!
  }

  type Order {
    order_id: ID!
    products: [Product]
  }

  type Query {
    getAllProducts: [Product]
    getProductById(product_id: ID!): Product

    getAllOrders: [Order]
    getOrderById(order_id: ID!): Order
  }

  type Mutation {
    addProduct(input: productInput): Product
    updateProductById(product_id: ID!, input: productInput!): Product
    deleteProductById(product_id: ID!): Product

    addOrder(order_id: ID!, products: [ID]!): Order
    updateOrderById(order_id: ID!, products: [ID]!): Order
    deleteOrderById(order_id: ID!): Order
  }

  input productInput {
    product_id: ID
    name: String
    description: String
    price: Float
  }
`;

module.exports = { schema };
