const fs = require("fs");
const path = require("path");

const express = require("express");
const restApiRoutesProvider = express.Router();

const dirFiles = fs.readdirSync(__dirname);

dirFiles.forEach((file) => {
  if (file !== "index.js" && file.endsWith("js")) {
    const route = require(path.join(__dirname, file));
    restApiRoutesProvider.use(route);
  }
});

module.exports = restApiRoutesProvider;
