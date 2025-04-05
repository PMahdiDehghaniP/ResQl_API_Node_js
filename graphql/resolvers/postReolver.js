const Post = require("../../models/postModel");
const User = require("../../models/userModel");

module.exports = {
  Mutation: {
    createPost: async (_, { title, content, userId }) => {
      const user = await User.findById(userId);
      if (!user) {
        return new Error("User not found");
      }
      const newPost = new Post({ title, content, userId });
      return await newPost.save();
    },
  },
  Query: {
    getUserPosts: async (_, { userId }) => {
      return await Post.find({ userId });
    },
  },
};
