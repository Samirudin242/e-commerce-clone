const Produk = require("../models/produk");

class ProdukController {
  static create(req, res, next) {
    let obj = {
      image: req.body.image,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      type: req.body.type,
      rating: req.body.rating,
      sold: req.body.sold,
      shopper: req.userData.name,
      place: req.userData.location,
      feedback: req.body.feedback,
      createAt: Date.now(),
    };
    Produk.create(obj)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Internal Server Error",
        });
      });
  }

  static showProduk(req, res, next) {
    Produk.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = ProdukController;
