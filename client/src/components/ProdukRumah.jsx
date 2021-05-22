import React from "react";
import { useQuery, gql } from '@apollo/client';
import Card from "./Card";
import "./style/produkRumah.css";

const rumahProduk = gql`
  query getDataByType {
    produkFilter(type: "rumah tangga") {
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


function ProdukRumah() {


  const {loading, error, data} = useQuery(rumahProduk);

  function getData(array) {
    let data = [];
    for(let i = 0; i < 6; i++) {
      data.push(array[i])
    }
    return data;
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="produk-container">
      <h2>Produk Rumah Tangga Unggulan</h2>
      <div className="produk">
        <Card datas={getData(data.produkFilter)}/>
      </div>
    </div>
  );
}

export default ProdukRumah;
