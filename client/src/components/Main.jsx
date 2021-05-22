import React from "react";
import "./style/main.css";
//components

import Palugada from "./Palugada";
import AksesorisHp from "./AksesorisHp";
import ProdukRumah from "./ProdukRumah";
import ProdukTerbaru from "./ProdukTerbaru";

function Main() {
  return (
    <div className="main">
      <Palugada />
      <AksesorisHp />
      <ProdukRumah />
      <ProdukTerbaru />
    </div>
  );
}

export default Main;
