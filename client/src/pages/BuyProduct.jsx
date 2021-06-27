import React from "react";

import InputForm from "../components/InputForm";
import Footer from "../components/Footer";
import CardCart from "../components/CardCart";
import "../components/style/buyProduct.css";

function BuyProduct() {
  return (
    <div>
      <InputForm />
      <div className="buy-product-container">
        <div>
          <h3>Keranjang</h3>
          <div className="choose-all">
            <div className="choose-all-input">
              <input id="choose-all" type="checkbox" />
              <label htmlFor="choose-all">Pilih Semua</label>
            </div>
            <div className="choose-all-delete">
              <p>Hapus</p>
            </div>
          </div>
          <CardCart />
        </div>
        <div className="box-buy">
          <h3>Ringkasan Belanja</h3>
          <div className="box-price">
            <div className="box-price-detail">
                <p>Total Harga (51 barang)</p>
                <p>Rp326.250</p>
            </div>
            <div className="box-price-detail">
                <p>Total Diskon Barang</p>
                <p>-Rp151.450</p>
            </div>
          </div>
          <div className="box-total-price">
            <div className="box-total-number">
                <p>Total Harga</p>
                <p>Rp177.800</p>
            </div>
          </div>
         <button>Beli</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuyProduct;
