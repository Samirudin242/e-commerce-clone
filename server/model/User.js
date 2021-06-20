const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  location: String,
  email: String,
  password: String,
  createdAt: String,
});

module.exports = model("user", userSchema);
