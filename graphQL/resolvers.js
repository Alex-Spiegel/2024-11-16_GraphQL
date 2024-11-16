const products = [
  {
    product_id: "001",
    name: "Blanket",
    description: "A comfortable blanket",
    price: 19.99,
  },
  {
    product_id: "002",
    name: "Outdoor Tent",
    description: "A nice little tent",
    price: 55.55,
  },
];

module.exports = {
  Query: {
    products: () => {
      return products;
    },
  },
};
