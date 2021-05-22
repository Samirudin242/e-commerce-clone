import React from "react";
import { useQuery, gql } from '@apollo/client';
import {Link} from "react-router-dom";

import Card from "./Card";
import "./style/aksesoris.css";

const aksesorisProduk = gql`
  query getDataByType {
    produkFilter(type: "aksesoris") {
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

function AksesorisHp() {


  const {loading, error, data} = useQuery(aksesorisProduk)
 

  function getData(array) {
    let data = [];
    for(let i = 0; i < 5; i++) {
      data.push(array[i])
    }
    return data;
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <div className="aksesoris-container">
      <div className="aksesoris-container-content1">
        <h2>Aksesoris HP Terlaris</h2>
        <div className="aksesoris">
          <Card datas={getData(data.produkFilter)}/>
        </div>
      </div>
      <div className="aksesoris-container-content2">
        <Link className="router" to="/all-products">
        <p>Lihat Semua Barang</p>
        </Link>
      </div>
    </div>
  );
}

export default AksesorisHp;
