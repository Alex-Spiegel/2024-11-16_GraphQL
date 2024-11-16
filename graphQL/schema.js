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
    products: [Order]
  }

  type Query {
    products: [Product]
  }
`;

module.exports = { schema };
