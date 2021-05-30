import React from "react";
import "./style/InputForm.css";
//icons
import { GiSmartphone } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

import logo from "../image/tokopedia.png";
import ux1 from "../image/ux-1.png";

function InputForm() {
  return (
    <div>
      <div className="header-top">
        <div className="header-top-right">
          <GiSmartphone size={20} />
          <p>Download Tokopedia App</p>
        </div>
        <div className="header-top-left">
          <p>Tentang Tokopedia</p>
          <p>Mitra Tokopedia</p>
          <p>Pusat Edukasi Seller</p>
          <p>Promo</p>
          <p>Tokopedia Care</p>
        </div>
      </div>
      <div className="header-input">
        <div className="header-input-1">
          <img src={logo} width="155" height="55" />
          <p>Kategori</p>
        </div>
        <div className="header-input-2">
          <div className="header-input-2-form">
            <input type="text" />
            <div className="logo-search">
              <span>
                <BiSearch size={20} />
              </span>
            </div>
          </div>
          <span className="logo-1">
            <MdShoppingCart size={20} />

            <div className="cart-hover">
              <img src={ux1} alt="empty cart" width="200px" />
              <p>Wah keranjang belanjaanmu kosong!</p>
              <div className="text">
                <p>
                  Daripada dianggurin, isi saja dengan barang-barang menarik
                </p>
                <p>Lihat-lihat dulu, siapa tahu ada yang kamu suka!</p>
              </div>
            </div>
          </span>
          <span className="logo-2">
            <BsBellFill size={20} />
            <div className="bell-hover">
              <div className="bell-hover-top">
                <h4>Notifikasi</h4>
                <IoMdSettings size={23} className="icon" />
              </div>
            </div>
          </span>
          <span className="logo-3">
            <MdEmail size={20} />
          </span>
        </div>
        {/* <div className="border"></div> */}
        <div className="header-input-3">
          <div className="header-input-3-shop">
            <AiTwotoneShop size={20} />
            <p>Toko</p>
          </div>
          <div className="header-input-3-user">
            <FaUserCircle size={20} />
            <p>Samirudin</p>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-1">
          <p>Pompa Galon Elektrik</p>
          <p>Vivo Y30</p>
          <p>Obeng Set</p>
          <p>Case Iphone X</p>
          <p>Iphone 12 Pro</p>
          <p>Tangga Lipat</p>
        </div>
        <div className="header-bottom-2">
          <GoLocation size={13} className="logo-location" />
          <p>
            Dikirim ke <span>Rumah Samirudin</span>
          </p>
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
}

export default InputForm;