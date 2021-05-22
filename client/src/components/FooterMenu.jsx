import React from "react";

import "./style/footerMenu.css";
import appStore from "../image/appStore.png";
import playStore from "../image/playStore.png";

function FooterMenu() {
  return (
    <div className="footer-menu-container">
      <div className="footer-menu-content">
        <div className="footer-content-main">
          <a>BukaBantuan (Hubungi Kami)</a>
          <a>FAQ (Tanya Jawab)</a>
          <a>Panduan Belanja</a>
          <a>Panduan Pelapak</a>
          <a>Panduan Keamanan</a>
        </div>
        <div className="footer-content-bukalapak">
          <h3>Bukalapak</h3>
          <a>Tentang Bukalapak</a>
          <a>Aturan Penggunaan</a>
          <a>Kebijakan Privasi</a>
          <a>Karir di Bukalapak</a>
          <a>Vulnerability Reports</a>
          <a>Blog Bukalapak</a>
          <a>Affiliate Program</a>
          <a>FAQ (Tanya Jawab</a>
        </div>
        <div className="footer-content-bukalapak">
          <h3>Pembeli</h3>
          <a>Cara Belanja</a>
          <a>Pembayaran</a>
          <a>Jaminan Aman</a>
          <a>Halaman Tag</a>
          <a>Jasa Pengadaan</a>
          <a>Promo</a>
          <a>BukaReview</a>
        </div>
        <div className="footer-content-bukalapak">
          <h3>Pelapak</h3>
          <a>Cara Berjualan</a>
          <a>Keuntungan Jualan</a>
          <a>Indeks Merek</a>
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
