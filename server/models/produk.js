const { getDatabase } = require("../config/config");
const Produk = getDatabase().collection("produk");
const { ObjectId } = require("mongodb");

class ProdukModel {
  static create(newProduk) {
    return Produk.insertOne(newProduk);
  }
  static find() {
    return Produk.find().toArray();
  }

  static findById(id) {
    return Produk.findOne({ _id: ObjectId(id) });
  }

  static findByIdAndUpdate(id, updatedData) {
    return Produk.updateOne(
      { _id: ObjectId(id) },
      {
        $set: updatedData,
      }
    );
  }
  static findByIdAndDelete(id) {
    return Produk.deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = ProdukModel;
