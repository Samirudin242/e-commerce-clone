const { model, Schema } = require("mongoose");

const produkSchema = new Schema({
  name: String,
  image: String,
  price: String,
  type: String,
  rating: String,
  sold: String,
  shopper: String,
  place: String,
  feedback: String,
  createdAt: String,
});

module.exports = model("Produk", produkSchema);
