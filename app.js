const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const { connectToDataBase } = require("./config/dataBaseConnector");
const { typeDefs, resolvers } = require("./graphql");
const errorHanlder = require("./middlewares/ErrorHandler");
const setHeaders = require("./middlewares/HeaderSetter");
const restApiRoutesProvider = require("./RESTAPI/routes");

//Config Env File
dotenv.config({ path: "./config/config.env" });

const app = express();

//middleware for setting headers
app.use(setHeaders);

//add REST API Route Provider  middleware to Provide All Routes
app.use("/api", bodyParser.json(), restApiRoutesProvider);

// Middleware for handling errors
app.use(errorHanlder);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.APP_PORT || 5000;
const startServer = async () => {
  try {
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });
    await connectToDataBase();
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Cant Run App Error :", error);
  }
};
startServer();
