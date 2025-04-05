const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const { connectToDataBase } = require("./config/dataBaseConnector");
const { typeDefs, resolvers } = require("./graphql");

//Config Env File
dotenv.config({ path: "./config/config.env" });

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const PORT = process.env.APP_PORT || 5000;

const startServer = async () => {
  try {
    await server.start();
    server.applyMiddleware({ app });
    await connectToDataBase();
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Cant Run App Error :", error);
  }
};
startServer();
