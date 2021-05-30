const { ApolloServer, gql } = require("apollo-server");
const Axios = require("axios");

const typeDefs = gql`

  type Produk {
    _id: ID
    image: String
    name: String
    price: String
    discount: String
    type: String
    rating: String
    sold: String
    shopper: String
    place: String
    feedback: String
  }

  type Query {
    produks: [Produk]
    produkFilter(type: String): [Produk]
  }
`;

const resolvers = {
  Query: {
    produks: () => {
      return Axios({
        method: "GET",
        url: "http://localhost:8000/produk",
      })
        .then(({ data }) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    produkFilter: function (parent, args, context, info) {
      const type = args.type;

      return Axios({
        method: "GET",
        url: "http://localhost:8000/produk",
      })
        .then(({ data }) => {
          let datas = [];
          data.forEach((produk) => {
            if (produk.type === type) {
              datas.push(produk);
            }
          });
          return datas;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

 server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

module.exports = server;