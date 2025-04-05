const User = require("../../models/userModel");
const Post = require("../../models/postModel");

module.exports = {
  Query: {
    getAllUsers: async () => await User.find(),
    getUserById: async (_, { id }) => {
      return await User.find({ _id: id });
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const newUser = new User({ name, email, password });
      return await newUser.save();
    },
  },
  User: {
    posts: async (parent) => {
      return await Post.find({ userId: parent.id });
    },
  },
};
