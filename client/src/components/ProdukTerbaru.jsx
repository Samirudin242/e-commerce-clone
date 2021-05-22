import React from "react";
import {useQuery, gql} from "@apollo/client"
import Card from "./Card";
import "./style/produkTerbaru.css";

const terbaruProduk = gql`
  query getDataByType {
    produkFilter(type: "produk terbaru") {
      _id
      image
      name
      price
      discount
      type
      rating
      sold
      shopper
      place
      feedback
    }
  }
`

function ProdukTerbaru() {

  const {loading, error, data} = useQuery(terbaruProduk)
 
  function getData(array) {
    let data = [];
    for(let i = 0; i < 4; i++) {
      data.push(array[i])
    }
    return data;
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="terbaru-container">
      <div className="terbaru-container-content1">
        <h2>Serbu Seru Produk Terbaru</h2>
        <div className="terbaru">
          <Card datas={getData(data.produkFilter)}/>
        </div>
      </div>
      <div className="terbaru-container-content2">
        <p>Lihat Semua Barang</p>
      </div>
    </div>
  );
}

export default ProdukTerbaru;
