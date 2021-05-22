const User = require("../models/user");
const jwt = require("jsonwebtoken");

class UserController {
  static register(req, res, next) {
    let obj = {
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: req.body.password,
    };

    User.create(obj)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Internal Server Error",
        });
      });
  }

  static login(req, res, next) {
    let obj = {
      password: req.body.password,
      email: req.body.email,
    };

    User.login(obj.email)
      .then((data) => {
        if (data.password === obj.password) {
          const token = jwt.sign(
            {
              email: data.email,
              location: data.location,
              name: data.name,
            },
            process.env.SECRET
          );
          res.status(200).json({ token: token, message: "success login" });
        } else {
          res.status(401).json({ message: `wrong password or email` });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }
}

module.exports = UserController;
