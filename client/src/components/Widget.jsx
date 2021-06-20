import React, { useState, useEffect } from "react";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { simCard } from "../image/simCardData";
import { widgetMenu } from "../image/widgetMenu";
import "./style/widget.css";

function Widget({ widget }) {
  const [datas, setDatas] = useState([]);
  const [startIndex, setstartIndex] = useState(0);
  const [dataChange, setDataChange] = useState(false);
  const [simType, setSimType] = useState(0);
  const [cardType, setCardType] = useState("");
  const [displayMenu, setDisplayMenu] = useState("pulsa");
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    setData(widget);
    determinedCardType(simCard, simType);
  }, [startIndex, simType]);

  function setData(widget) {
    let temp = [];
    let i = startIndex;
    while (temp.length !== 4) {
      temp.push(widget[i]);
      i++;
      if (i === 6) {
        i = 0;
      }
    }
    setDatas(temp);
  }

  const setCard = (e) => {
    setSimType(e.target.value);
  };

  function determinedCardType(widget, inputNumber) {
    let result = "";
    widget.forEach((data) => {
      if (data.number === inputNumber) {
        result = data.logo;
      }
    });
    setCardType(result);
  }

  const nextWidgets = () => {
    setstartIndex(startIndex === 0 ? 3 : 0);
    setDataChange(!dataChange);
  };

  const prevWidgets = () => {
    setstartIndex(startIndex === 0 ? 3 : 0);
    setDataChange(!dataChange);
  };

  const isExpanded = () => {
    setExpandMenu(!expandMenu);
  };

  function displayMenuChange(input) {
    setDisplayMenu(input);
    // console.log(displayMenu);
  }

  return (
    <div className="widget-card">
      <div className="widget-card-content">
        <div className="widget-card-content-1">
          <h2>Kategori Pilihan</h2>
          <div className="small-card">
            <AiFillLeftCircle
              size={25}
              className="left-arrow-widget"
              onClick={prevWidgets}
            />
            <AiFillRightCircle
              size={25}
              className="right-arrow-widget"
              onClick={nextWidgets}
            />

            {datas?.map((data, index) => {
              return (
                <div key={index} className="card">
                  <img
                    width="120"
                    height="120"
                    src={data.image}
                    alt="widget image"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="widget-card-content-2">
          <h2>
            Top Up & Tagihan <span>Lihat Semua</span>
          </h2>
          <div className="card-content-2">
            <div className="card-content-2-menu">
              <p
                onClick={() => displayMenuChange("pulsa")}
                className={displayMenu === "pulsa" ? "pulsa" : ""}
              >
                Pulsa
              </p>
              <p
                onClick={() => displayMenuChange("data")}
                className={displayMenu === "data" ? "data" : ""}
              >
                Paket Data
              </p>
              <p
                onClick={() => displayMenuChange("listrik")}
                className={displayMenu === "listrik" ? "listrik" : ""}
              >
                Listrik PLN
              </p>
              <p onClick={() => displayMenuChange("pesawat")}>Flight</p>
              <div className="expand-menu">
                <BsThreeDotsVertical
                  size={20}
                  className="icon-dot"
                  onClick={isExpanded}
                />
                {expandMenu && (
                  <div className="expand-menu-dot">
                    <p>Roaming</p>
                    <p>BPJS</p>
                    <p>Internet dan TV Kabel</p>
                    <p>GAS PGN</p>
                    <p>Pajak PBB</p>
                    <p>Retribusi</p>
                    <p>Tagihan Kartu Kredit</p>
                    <p>Air PDAM</p>
                    <p>Angsuran Kredit</p>
                    <p>Telkom</p>
                    <p>M-tix</p>
                    <p>Uang Elektronik</p>
                    <p>E-samsat</p>
                    <p>Premi Asuransi</p>
                  </div>
                )}
              </div>
            </div>
            {displayMenu === "pulsa" && (
              <div className="widget-card-content-pulsa">
                <div className="widget-card-content-pulsa-text">
                  <p>Nomor Telepon</p>
                  <p>Nominal</p>
                </div>
                <div className="widget-card-content-pulsa-form">
                  <div className="input-hp">
                    <input onChange={setCard} type="number" />
                    {cardType.length > 0 && (
                      <img src={cardType} alt="sim card logo" />
                    )}
                  </div>
                  <select>
                    <option>15.000 - Rp16.500</option>
                    <option>25.000 - Rp26.500</option>
                    <option>30.000 - Rp31.500</option>
                    <option>40.000 - Rp41.500</option>
                    <option>50.000 - Rp51.500</option>
                    <option>75.000 - Rp76.500</option>
                    <option>100.000 - Rp100.500</option>
                    <option>150.000 - Rp150.000</option>
                    <option>300.000 - Rp200.000</option>
                    <option>500.000 - Rp500.000</option>
                    <option>1.000.000 - Rp1.000.000</option>
                  </select>
                  <button>Beli</button>
                </div>
              </div>
            )}
            {displayMenu === "data" && (
              <div className="widget-card-content-pulsa">
                <div className="widget-card-content-pulsa-text">
                  <p>Nomor Telepon</p>
                  <p>Nominal</p>
                </div>
                <div className="widget-card-content-pulsa-form">
                  <div className="input-hp">
                    <input onChange={setCard} type="number" />
                    {cardType.length > 0 && (
                      <img src={cardType} alt="sim card logo" />
                    )}
                  </div>
                  <select>
                    <option>
                      GamesMAX Unlimited Play Silver Mobile Legends - Rp25.000
                    </option>
                    <option>
                      GamesMAX Unlimited Play Silver Free Fire - Rp25.000
                    </option>
                    <option>
                      GamesMAX Unlimited Play Silver AOV - Rp25.000
                    </option>
                    <option>
                      GamesMAX Unlimited Play Silver Rise of Nowlins - Rp25.000
                    </option>
                    <option>
                      GamesMAX Unlimited Play Silver Google Play - Rp25.000
                    </option>
                  </select>
                  <button>Beli</button>
                </div>
              </div>
            )}
            {displayMenu === "listrik" && (
              <div className="widget-card-content-listrik">
                <div className="widget-card-content-listrik-token">
                  <p>Jenis Produk Listrik</p>
                  <select>
                    <option value="">Token Listrik</option>
                    <option value="">Tagihan Listik</option>
                    <option value="">PLN Non-Tragis</option>
                  </select>
                </div>
                <div className="widget-card-content-listrik-token">
                  <p>No. Meter/ID Pel</p>
                  <input type="number" />
                </div>
                <div className="widget-card-content-listrik-token">
                  <p>Nominal</p>
                  <select name="" id="">
                    <option>Rp 20.000</option>
                    <option>Rp 50.000</option>
                    <option>Rp 100.000</option>
                    <option>Rp 200.000</option>
                    <option>Rp 500.000</option>
                    <option>Rp 1.000.000</option>
                  </select>
                </div>
                <div className="listrik-button">
                  <button>Bayar</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="widget-card-menu">
        <div className="widget-card-container">
          {widgetMenu.map((widget, idx) => {
            return (
              <div key={idx} className="widget-card-menu-button">
                <img
                  height="24"
                  width="24"
                  src={widget.logo}
                  alt="widget logo"
                />
                <p>{widget.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Widget;
