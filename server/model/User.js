const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  location: String,
  email: String,
  password: String,
  createdAt: String,
  carts: [
    {
      name: String,
      image: String,
      price: String,
      discount: String,
      shopper: String,
      place: String,
    },
  ],
});

module.exports = model("user", userSchema);
