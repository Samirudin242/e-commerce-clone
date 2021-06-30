const { gql } = require("apollo-server");

module.exports = gql`
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
    stocks: String
    stock: Int
    createAt: Int
  }

  type Cart {
    name: String
    image: String
    price: String
    discount: String
    shopper: String
    place: String
  }

  type User {
    id: ID
    name: String!
    email: String!
    token: String!
    location: String
    carts: [Cart]
    createdAt: String!
  }

  input RegisterInput {
    name: String!
    password: String!
    email: String!
    location: String!
  }

  input ProdukInput {
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
    getProduks: [Produk]
    getProduk(Id: ID): Produk
    getProdukByType(type: String): [Produk]
  }

  type Mutation {
    register(registerInput: RegisterInput): User
    login(email: String, password: String): User
    createProduk(produkInput: ProdukInput): Produk
    addProductToCart(userEmail: String, productId: ID): User
  }
`;
