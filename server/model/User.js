const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  location: String,
  email: String,
  password: String,
});

module.exports = model("User", userSchema);
