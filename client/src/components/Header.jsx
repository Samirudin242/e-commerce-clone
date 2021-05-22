import React from "react";

//components
import InputForm from "./InputForm";
import Carousel from "./Carousel";
import Widget from "./Widget";

//data
import { sliderData } from "../image/sliderData";
import { widgetData } from "../image/widgetData";

function Header() {
  return (
    <div>
      <InputForm />
      <Carousel slide={sliderData} />
      <Widget widget={widgetData} />
    </div>
  );
}

export default Header;
