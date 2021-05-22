const jwt = require("jsonwebtoken");
const User = require("../models/user");

class Auth {
  static Authentications(req, res, next) {
    const { token } = req.headers;

    if (!token) {
      res.status(400).json({ message: `token not found` });
    } else {
      let decode = jwt.verify(token, process.env.SECRET);
      req.userData = decode;
      User.login(decode.email)
        .then((data) => {
          if (data) {
            next();
          } else {
            res.status(403).json({ message: `invalid user` });
          }
        })
        .catch((err) => {
          res.status(500).json({ message: `Internal server error auth` });
        });
    }
  }
}

module.exports = Auth;
