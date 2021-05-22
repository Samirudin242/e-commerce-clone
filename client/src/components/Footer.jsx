import React from "react";
import "./style/footer.css";

import FooterMenu from "./FooterMenu";
//logo
import logo from "../image/bukalapak.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <div className="footer-content">
        <div className="footer-content-logo">
          <img height="30" src={logo} alt="logo bukalapak" />
          <p>situs jual beli online mudah & terpercaya</p>
        </div>
        <div className="footer-content-medsos">
          <p>Temukan kami di:</p>
          <FaFacebook size={25} style={{ color: "#1667a1" }} />
          <AiFillTwitterCircle
            style={{ marginLeft: "5px", color: "#61bdff" }}
            size={25}
          />
          <GrYoutube
            style={{ marginLeft: "5px", color: "#e6305a" }}
            size={25}
          />
          <FiInstagram
            style={{
              marginLeft: "5px",
              background:
                "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)",
              borderRadius: "20%",
              height: "25px",
              width: "25px",
            }}
            size={25}
          />
          <FaLinkedin
            style={{ marginLeft: "5px", color: "#2c8dc9" }}
            size={25}
          />
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}

export default Footer;
