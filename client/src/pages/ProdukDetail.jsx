import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import {AiFillPlusCircle, AiFillMinusCircle, AiFillShop, AiTwotoneStar} from "react-icons/ai";
import {GoLocation} from "react-icons/go"; 
import "../components/style/produkDetail.css";

import InputForm from "../components/InputForm";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import {moneyConver, moneyFormat} from "../helper/moneyConver";

const GET_PRODUK = gql`
query getProduk($produkId: ID) {
    getProduk(Id: $produkId) {
    image
    name
    price
    discount
    type
    rating
    sold
    shopper
    place
    stock
    feedback
    }
}

`



function ProdukDetail() {
  const { id } = useParams();

  const {loading, error, data} = useQuery(GET_PRODUK, {
      variables: {
              produkId: id,
      }
  })

  const [total, setTotal] = useState(1);
  let [price, setPrice] = useState("");
  useEffect( () => {
    document.title = "Produk Detail | React App";

    async function getPrice() {
      const discount = await data?.getProduk.discount
      const produkData = await data;
      if(discount) {
        await setPrice(moneyFormat(Math.round(Number(moneyConver(produkData?.getProduk.price)) - ((Number(produkData?.getProduk.discount)/100) * Number(moneyConver(produkData?.getProduk.price))))))
      }  else {
        await setPrice(produkData?.getProduk.price)
      }
    }

    getPrice();

  }, [data]);

  
let a = "";

if(data?.getProduk.discount) {
  a = moneyFormat(Math.round(Number(moneyConver(data?.getProduk.price)) - ((Number(data?.getProduk.discount)/100) * Number(moneyConver(data?.getProduk.price)))))
} else {
  a = data?.getProduk.price
}




 async function addTotal () {
    if(total < data?.getProduk.stock) {
      setTotal(total + 1)
        setPrice(moneyFormat(Number(moneyConver(price)) + Number(moneyConver(a))))
    }

  }

  function lessTotal () {
    if(total > 1) {
      setTotal(total - 1)
      setPrice(moneyFormat(Number(moneyConver(price)) - Number(moneyConver(a))))
    }

  }


  if (loading) {
    return <Loading />
  }

  if (error) return `Error! ${error.message}`;


 

  return (
    <div>
      <InputForm />
      <div className="card-detail-container">
        <div className="card-detail-image">
          <img
            heigth="348"
            width="348"
            src={data?.getProduk.image}
            alt="produk image"
          />
        </div>
        <div className="card-detail-description">
          <p>{data?.getProduk.name}</p>
          <div className="detail-rating">
            <p>{data?.getProduk.sold}</p>
            <div className="dot"></div>
            <p><AiTwotoneStar style={{color: "#bdcc31", alignItems: "center"}}/> 5 (10 ulasan)</p>
          </div>
          {data?.getProduk.discount === null ? 
          <p className="price-detail">Rp{data?.getProduk.price}</p> :
          <div>
            <p className="price-detail">Rp {moneyFormat(Math.round(Number(moneyConver(data?.getProduk.price)) - ((Number(data?.getProduk.discount)/100) * Number(moneyConver(data?.getProduk.price)))))}</p>
            <div className="produk-detail-discount">
              <span>{data?.getProduk.discount}%</span>
              <span>Rp{data?.getProduk.price}</span>
            </div>
          </div>
          }
          <div className="detail-shop">
            <AiFillShop size={50} style={{color: "#928d8d"}} />
            <div className="shop-information">
                <p>{data?.getProduk.shopper}</p>
                <p> <AiTwotoneStar style={{color: "#bdcc31"}}/> 4.7 rata-rata ulasan</p>
                <p><GoLocation/> Dikirm dari {data?.getProduk.place}</p>
            </div>
                <button>Follow</button>
          </div>
        </div>
        <div className="card-detail-stock">
          <p>Atur jumlah dan catatan</p>
          <div className="card-stock-number">
              <div className="card-stock-input">
              <AiFillPlusCircle onClick={addTotal} className={`button-stock ${total === data?.getProduk.stock  ? "button-stock-valid": ""}`} size={25}/>
              <input onChange={({target}) => setTotal(target.value)} value={total} type="number" />
              <AiFillMinusCircle onClick={lessTotal} className={`button-stock ${total === 1 ? "button-stock-valid": ""}`}  size={25}/>
              </div>
              <p>Stock <span className="number-stock">{data?.getProduk.stock}</span></p>
          </div>
          <div className="card-detail-price">
              <p>subtotal</p>
              <p>{price}</p>
          </div>
          <div className="button-stock">
              <button>+ Keranjang</button>
              <Link className="link" to="/buy-product">
              <button className="button-buy">Beli Langsung</button>
              </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProdukDetail;
