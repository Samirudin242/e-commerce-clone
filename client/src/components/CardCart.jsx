import React from 'react'
import "./style/cardCart.css"
import {
    AiFillShop,
    AiOutlinePlusCircle,
    AiOutlineMinusCircle,
  } from "react-icons/ai";
  import { FiTrash2 } from "react-icons/fi";

function CardCart() {
    return (
        <div>
            <div className="choose-product">
              <div className="choose-product-shop">
                <input id="choose-prodcut" type="checkbox" />
                <div className="choose-product-shop-name">
                  <p className="shop-name">
                    <AiFillShop size={20} style={{ color: "#928d8d" }} />
                    Theyaku
                  </p>
                  <p>Jakarta Timur</p>
                </div>
              </div>
              <div className="choose-product-information">
                <div className="product-information">
                  <input id="choose-prodcut" type="checkbox" />
                  <img
                    src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2020/11/19/2fbea092-7882-47b2-b152-5cfb585017ef.jpg.webp?ect=3g"
                    alt=""
                  />
                  <div className="product-information-text">
                    <p>
                      set sendok garpu plastik / sendok garpu set plastik hitam
                      HYGIENE ECER
                    </p>
                    <div className="product-information-price">
                      <span>5%</span>
                      <span>Rp585</span>
                      <span>Rp556</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-delete-product">
                <FiTrash2 size={25}/>
                <div className="add-product">
                  <AiOutlinePlusCircle size={25} />
                  <input type="number" />
                  <AiOutlineMinusCircle size={25}/>
                </div>
              </div>  
            </div>
          </div>
    )
}

export default CardCart
