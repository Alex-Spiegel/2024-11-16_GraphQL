const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { schema } = require("./graphQL/schema.js");
const resolvers = require("./graphQL/resolvers.js");

async function startServer() {
  const app = express();

  // Apollo-Server-Setup
  const server = new ApolloServer({ typeDefs: schema, resolvers }); // ApolloServer-Object needs TypeDefs (aka Schema) and resolvers

  await server.start();
  server.applyMiddleware({ app });

  app.listen(3000, () => {
    console.log(
      `Server is running at http://localhost:3000${server.graphqlPath}`
    );
  });
}

startServer();
