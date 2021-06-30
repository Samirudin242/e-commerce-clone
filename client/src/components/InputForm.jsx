import React, { useContext } from "react";
import {AuthContext} from "../context/auth";

import "./style/InputForm.css";
import HeaderLogin from "./HeaderLogin";
//icons
import { GiSmartphone } from "react-icons/gi";
import {  BiChevronDown } from "react-icons/bi";
import { GoLocation } from "react-icons/go";


function InputForm() {
  const {user, logout} = useContext(AuthContext);


  return (
    <div className="input-form-container">
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
      
      <HeaderLogin />
      
      <div className="header-bottom">
        <div className="header-bottom-1">
          <p>Pompa Galon Elektrik</p>
          <p>Vivo Y30</p>
          <p>Obeng Set</p>
          <p>Case Iphone X</p>
          <p>Iphone 12 Pro</p>
          <p>Tangga Lipat</p>
        </div>
          {user && (
        <div className="header-bottom-2">
          <GoLocation size={13} className="logo-location" />
          <p>
            Dikirim ke <span>Rumah {user.name}</span>
          </p>
          <BiChevronDown />
        </div>
          )}
      </div>
    </div>
    </div>
  );
}

export default InputForm;
