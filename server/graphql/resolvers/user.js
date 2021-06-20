const User = require("../../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
const { validatorsRegister } = require("../../utils/validators");
const { validatorsLogin } = require("../../utils/validators");

module.exports = {
  Mutation: {
    async login(_, { email, password }) {
      const { errors, valid } = validatorsLogin(email, password);

      if (!valid) {
        throw new UserInputError("errors", { errors });
      }

      const user = await User.findOne({ email });
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("errors", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "wrong password";
        throw new UserInputError("errors", { errors });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        "theyaku"
      );

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },

    async register(
      _,
      { registerInput: { name, password, email, location } },
      context,
      info
    ) {
      const { errors, valid } = validatorsRegister(
        name,
        password,
        location,
        email
      );

      if (!valid) {
        throw new UserInputError("errors", { errors });
      }

      password = await bcrypt.hash(password, 12);

      const user = await User.findOne({ email });

      if (user) {
        throw new UserInputError("Email is taken", {
          errors: {
            email: "email is taken",
          },
        });
      }

      const newUser = new User({
        name,
        email,
        location,
        password,
        createdAt: new Date().toISOString(),
      });

      const result = await newUser.save();

      const token = jwt.sign(
        {
          id: result.id,
          email: result.email,
          name: result.name,
          location: result.location,
        },
        "theyaku"
      );

      return {
        ...result._doc,
        id: result.id,
        token,
      };
    },
  },
};
