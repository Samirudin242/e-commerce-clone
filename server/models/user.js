const { getDatabase } = require("../config/config");
const User = getDatabase().collection("user");
const { ObjectId } = require("mongodb");

class UserModel {
  static create(newUser) {
    return User.insertOne(newUser);
  }

  static login(email) {
    return User.findOne({ email: email });
  }
}

module.exports = UserModel;
