const { AuthenticationError, UserInputError } = require("apollo-server");

const Produk = require("../../model/Produk");
const checkAuth = require("../../utils/check-auth");

module.exports = {
  Query: {
    async getProduks() {
      try {
        const produks = await Produk.find({});
        return produks;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    async getProduk(_, { Id }) {
      try {
        const produk = await Produk.findById(Id);
        if (produk) {
          return produk;
        } else {
          throw new Error("produk not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    async getProdukByType(_, { type }) {
      try {
        const produks = await Produk.find({ type });
        return produks;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },

  Mutation: {
    async createProduk(
      _,
      {
        produkInput: {
          name,
          image,
          price,
          discount,
          type,
          rating,
          sold,
          feedback,
        },
      },
      context
    ) {
      const user = checkAuth(context);

      // if (body.trim() === "") {
      //   throw new Error("Post body must not be empty");
      // }

      const newProduk = new Produk({
        name,
        image,
        price,
        discount,
        type,
        rating,
        sold,
        feedback,
        shopper: user.name,
        place: user.location,
        createdAt: new Date().toISOString(),
      });

      const produk = await newProduk.save();

      // context.pubsub.publish("NEW_POST", {
      //   newPost: post,
      // });

      return produk;
    },
    //     async deletePost(_, { postId }, context) {
    //       const user = checkAuth(context);

    //       try {
    //         const post = await Post.findById(postId);

    //         if (post.email === user.email) {
    //           await post.delete();
    //           return "Post deleted successfully";
    //         } else {
    //           throw new AuthenticationError("Action is not allowed");
    //         }
    //       } catch (error) {
    //         throw new Error(error);
    //       }
    //     },
    //     likePost: async (_, { postId }, context) => {
    //       const { email, username } = checkAuth(context);

    //       const post = await Post.findById(postId);

    //       if (post) {
    //         if (post.likes.find((like) => like.email === email)) {
    //           post.likes = post.likes.filter((like) => like.email !== email);
    //         } else {
    //           post.likes.push({
    //             email,
    //             username,
    //             createdAt: new Date().toISOString(),
    //           });
    //         }
    //         await post.save();
    //         return post;
    //       } else {
    //         throw new UserInputError("Post not found");
    //       }
    //     },
  },
  //   Subscription: {
  //     newPost: {
  //       subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_POST"),
  //     },
  //   },
};
