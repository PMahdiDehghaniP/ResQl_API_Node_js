const Post = require("../../models/postModel");
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    const totalCount = posts.length;
    res.status(200).json({
      posts,
      totalCount,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllPosts;
