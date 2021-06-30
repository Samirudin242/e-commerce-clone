const { AuthenticationError, UserInputError } = require("apollo-server");

const Produk = require("../../model/Produk");
const User = require("../../model/User");
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
      return produk;
    },
    async addProductToCart(_, { userEmail, productId }, context) {
      const { email } = checkAuth(context);

      const user = await User.findOne({ email: userEmail });
      const product = await Produk.findById(productId);
      if (email === user.email) {
        user.carts.unshift({
          name: product.name,
          image: product.image,
          price: product.price,
          discount: product.discount,
          shopper: product.shopper,
          place: product.place,
        });

        await user.save();
        return user;
      } else {
        throw new UserInputError("Your not authorized");
      }
    },
  },
};
