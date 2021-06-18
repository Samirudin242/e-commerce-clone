import React from "react";

import "./style/footerMenu.css";
import appStore from "../image/appStore.png";
import playStore from "../image/playStore.png";

function FooterMenu() {
  return (
    <div className="footer-menu-container">
      <div className="footer-menu-content">
        <div className="footer-content-main">
          <a href="#">BukaBantuan (Hubungi Kami)</a>
          <a href="#">FAQ (Tanya Jawab)</a>
          <a href="#">Panduan Belanja</a>
          <a href="#">Panduan Pelapak</a>
          <a href="#">Panduan Keamanan</a>
        </div>
        <div className="footer-content-bukalapak">
          <h3>Bukalapak</h3>
          <a href="#">Tentang Bukalapak</a>
          <a href="#">Aturan Penggunaan</a>
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Karir di Bukalapak</a>
          <a href="#">Vulnerability Reports</a>
          <a href="#">Blog Bukalapak</a>
          <a href="#">Affiliate Program</a>
          <a href="#">FAQ (Tanya Jawab</a>
        </div>
        <div className="footer-content-bukalapak">
          <h3>Pembeli</h3>
          <a href="#">Cara Belanja</a>
          <a href="#">Pembayaran</a>
          <a href="#">Jaminan Aman</a>
          <a href="#">Halaman Tag</a>
          <a href="#">Jasa Pengadaan</a>
          <a href="#">Promo</a>
          <a href="#">BukaReview</a>
        </div>
        <div className="footer-content-bukalapak">
          <h3>Pelapak</h3>
          <a href="#">Cara Berjualan</a>
          <a href="#">Keuntungan Jualan</a>
          <a href="#">Indeks Merek</a>
        </div>
        <div className="footer-content-app">
          <img height="40" src={playStore} alt="play store image" />
          <img height="40" src={appStore} alt="app store image" />
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2021 Hak Cipta Terpelihara PT Bukalapak & PT Tokopedia.</p>
      </div>
    </div>
  );
}

export default FooterMenu;
