import React from "react";
import { useQuery, gql } from '@apollo/client';
import "./style/palugada.css";

import Card from "./Card";


const palugadaProduks =  gql`
  query getDataByType {
    produkFilter(type: "palugada") {
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

function Palugada() {

  const {loading, error, data} = useQuery(palugadaProduks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  
  return (
    <div className="palugada-container">
      <h2>Produk Palugada Terlaris</h2>
      <div className="palugada">  
        <Card datas={data.produkFilter}/>
      </div>
    </div>
  );
}

export default Palugada;
