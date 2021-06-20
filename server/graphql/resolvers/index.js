const produksResolvers = require("./produk");
const usersResolvers = require("./user");
// const commentsResolvers = require("./comments");
module.exports = {
  // Post: {
  //   commentsCount(parent) {
  //     return parent.comments.length;
  //   },
  //   likesCount: (parent) => parent.likes.length,
  // },
  Query: {
    ...produksResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...produksResolvers.Mutation,
    // ...commentsResolvers.Mutation,
  },
  // Subscription: {
  //   ...postsResolvers.Subscription,
  // },
};
