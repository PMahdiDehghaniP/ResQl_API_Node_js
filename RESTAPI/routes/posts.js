const express = require("express");
const getAllPosts = require("../controller/postController");
const { authenticateRestAPI } = require("../../middlewares/Auth");
const postRouter = express.Router();

postRouter.get("/posts", authenticateRestAPI, getAllPosts);

module.exports = postRouter;
