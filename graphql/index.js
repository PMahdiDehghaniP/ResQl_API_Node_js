const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const path = require("path");

//setup typeDefs
const typeDefsArray = loadFilesSync(path.join(__dirname, "./schemas"), {
  extensions: ["graphql"],
});
const typeDefs = mergeTypeDefs(typeDefsArray);

//setup resolvers
const resolversArray = loadFilesSync(path.join(__dirname, "./resolvers"));
const resolvers = mergeResolvers(resolversArray);

module.exports = {
  resolvers,
  typeDefs,
};
