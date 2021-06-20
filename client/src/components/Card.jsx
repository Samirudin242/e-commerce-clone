import React from "react";
import {Link} from "react-router-dom";

import "./style/card.css";
import {moneyConver, moneyFormat} from "../helper/moneyConver";

function Card(props) {
  const {datas} = props;

  return (
    <>
    {datas.map((data, index) => {
      return (
        <Link className="router" to={`/product/${data._id}`}>  
        <div key={index} className="card-container">
      <img
        height="195"
        width="183"
        src={data.image}
        alt="produk image"
      />
      <div className="card-information">
        <a href="">{data.name.length > 51 ? data.name.split("").splice(0, 49).join("") + "..." : data.name}</a>
          {data.discount === null && (
        <div className="card-price">  
          <p>Rp {data.price}</p>
        </div>
          )}
          {data.discount !== null && (
        <div className="card-price">  
          <p>Rp {moneyFormat(Math.round(Number(moneyConver(data.price)) - ((Number(data.discount)/100) * Number(moneyConver(data.price)))))}</p>
          <div className="card-original-price">
            <p>{data.price}</p>
            <p>-{data.discount}%</p>
          </div>
        </div>
          )}
        <div className="card-rating">
          <img
            src="https://s0.bukalapak.com/ast/bazaar-dweb/base/images/pc-ico-star-minor.png"
            alt=""
          />
          <p>{data.rating}</p>
          <div className="dot"></div>
          <p>{data.sold}</p>
        </div>
        <div className="card-location">
          <p>{data.place}</p>
        </div>
        <div className="card-feedback">
          <p>{data.shopper}</p>
          <p>{data.feedback}</p>
        </div>
      </div>
    </div>
        </Link>
      )
    })}
    
    </>
  );
}

export default Card;
