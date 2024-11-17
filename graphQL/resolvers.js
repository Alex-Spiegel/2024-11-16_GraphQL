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
  {
    product_id: "003",
    name: "Video Game Console",
    description: "A device to play games",
    price: 329.2,
  },
];

const orders = [
  {
    order_id: "1001",
    products: [products[0], products[2]],
  },
  {
    order_id: "1002",
    products: [products[1], products[0]],
  },
  {
    order_id: "1003",
    products: [products[1], products[2], products[0]],
  },
];

module.exports = {
  Query: {
    // ==== PRODUCT ENDPOINTS BELOW ====
    getAllProducts: () => {
      return products;
    },
    getProductById: (parent, args) => {
      return products.find((product) => product.product_id == args.product_id);
    },

    // ==== ORDER ENDPOINTS BELOW ====
    getAllOrders: () => {
      return orders;
    },
    getOrderById: (parent, args) => {
      return orders.find((order) => order.order_id == args.order_id);
    },
  },

  Mutation: {
    // ==== PRODUCT ENDPOINTS BELOW ====
    addProduct: (parent, args) => {
      // create new product from args.input
      const newProduct = {
        product_id: args.input.product_id,
        name: args.input.name,
        description: args.input.description,
        price: args.input.price,
      };
      // add product to the products array
      products.push(newProduct);

      // return the new product
      return newProduct;
    },

    updateProductById: (parent, args) => {
      // Find the product by ID
      const product = products.find(
        (product) => product.product_id == args.product_id
      );

      // if product doesn't exist, throw an error
      if (!product) {
        throw new Error("Product not found!");

        // otherwiese update the product based on the args.input
      } else {
        Object.assign(product, args.input);

        return product;
      }
    },

    deleteProductById: (parent, args) => {
      // Find the index ofthe product to delete
      const deleteProductIndex = products.findIndex(
        (product) => product.product_id == args.product_id
      );

      // error handling - does product exist
      if (deleteProductIndex === -1) {
        throw new Error("Product not found");

        // delete the product from the array
      } else {
        const deletedProduct = products.splice(deleteProductIndex, 1)[0];
        // return the deleted product
        return deletedProduct;
      }
    },

    // ==== ORDER ENDPOINTS BELOW ====
    addOrder: (parent, args) => {
      const order_id = args.order_id; // order_id direkt aus args
      const productIds = args.products; // Produkt-IDs direkt aus args

      // Finde die Produkte anhand der IDs
      const orderedProducts = productIds.map((productId) => {
        return products.find((product) => product.product_id === productId);
      });

      // Prüfen, ob ein Produkt nicht gefunden wurde
      if (orderedProducts.includes(undefined)) {
        throw new Error("Ein oder mehrere Produkte wurden nicht gefunden");
      }

      // Neue Bestellung erstellen
      const newOrder = {
        order_id,
        products: orderedProducts,
      };

      // Bestellung zur orders-Liste hinzufügen
      orders.push(newOrder);

      // Rückgabe der neuen Bestellung
      return newOrder;
    },

    updateOrderById: (parent, args) => {
      const order_id = args.order_id; // Bestell-ID direkt aus args
      const productIds = args.products; // Produkt-IDs direkt aus args

      // Finde die Bestellung anhand der order_id
      const order = orders.find((order) => order.order_id === order_id);

      if (!order) {
        throw new Error("Bestellung nicht gefunden");
      }

      // Finde die Produkte anhand der IDs
      const orderedProducts = productIds.map((productId) => {
        return products.find((product) => product.product_id === productId);
      });

      // Prüfen, ob ein Produkt nicht gefunden wurde
      if (orderedProducts.includes(undefined)) {
        throw new Error("Ein oder mehrere Produkte wurden nicht gefunden");
      }

      // Aktualisiere die Produkte der Bestellung
      order.products = orderedProducts;

      // Rückgabe der aktualisierten Bestellung
      return order;
    },

    deleteOrderById: (parent, args) => {
      // Find the index ofthe order to delete
      const deleteOrderIndex = orders.findIndex(
        (item) => item.order_id == args.order_id
      );

      // error handling - does order exist?
      if (deleteOrderIndex === -1) {
        throw new Error("Product not found");

        // delete the order from the array
      } else {
        const deletedOrder = orders.splice(deleteOrderIndex, 1)[0];
        // return the deleted product
        return deletedOrder;
      }
    },
  },
};
