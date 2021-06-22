import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import {AiFillPlusCircle, AiFillMinusCircle, AiFillShop, AiTwotoneStar} from "react-icons/ai";
import {GoLocation} from "react-icons/go"; 
import "../components/style/produkDetail.css";

import InputForm from "../components/InputForm";
import Footer from "../components/Footer";

const GET_PRODUK = gql`
query getProduk($produkId: String) {
    getProduk(produkId: $produkId) {
    image
    name
    price
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

  useEffect(() => {
    document.title = "Produk Detail | React App";
  }, []);


  if (loading) {
    return <p>Loading..</p>;
  }

  if (error) return `Error! ${error.message}`;

  console.log(data, id);

 

  return (
    <div>
      <InputForm />
      <div className="card-detail-container">
        <div className="card-detail-image">
          <img
            heigth="348"
            width="348"
            src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/2/4/56e1546e-9819-45c9-bf6d-28f69ea2a4be.jpg"
            alt="produk image"
          />
        </div>
        <div className="card-detail-description">
          <p>Jersey LFC Liverpool Away 20/21 Original</p>
          <div className="detail-rating">
            <p>Terjual 8</p>
            <div className="dot"></div>
            <p><AiTwotoneStar style={{color: "#bdcc31", alignItems: "center"}}/> 5 (10 ulasan)</p>
          </div>
          <p className="price-detail">Rp 658.000</p>
          <div className="detail-shop">
            <AiFillShop size={50} style={{color: "#928d8d"}} />
            <div className="shop-information">
                <p>Theyaku</p>
                <p> <AiTwotoneStar style={{color: "#bdcc31"}}/> 4.7 rata-rata ulasan</p>
                <p><GoLocation/> Dikirm dari Jakarta Timur</p>
            </div>
                <button>Follow</button>
          </div>
        </div>
        <div className="card-detail-stock">
          <p>Atur jumlah dan catatan</p>
          <div className="card-stock-number">
              <div className="card-stock-input">
              <AiFillPlusCircle className="button-stock" size={25}/>
              <input type="number" />
              <AiFillMinusCircle className="button-stock"  size={25}/>
              </div>
              <p>Stock <span className="number-stock">17</span></p>
          </div>
          <div className="card-detail-price">
              <p>subtotal</p>
              <p>Rp 100.000</p>
          </div>
          <div className="button-stock">
              <button>+ Keranjang</button>
              <button>Beli Langsung</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProdukDetail;
