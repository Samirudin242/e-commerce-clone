import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import "../components/style/produkDetail.css";

import InputForm from "../components/InputForm";
import Footer from "../components/Footer";


function ProdukDetail() {

    const {id} = useParams

    useEffect(() => {
        document.tittle = "Produk Detail | React App"
    }, [])

    return (
        <div>
            <InputForm />
        <div className="card-detail-container">
            <div className="card-detail-image">
                <img heigth="348" width="348" src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/2/4/56e1546e-9819-45c9-bf6d-28f69ea2a4be.jpg" alt="produk image"/>
            </div>
            <div className="card-detail-description">
            <p>Jersey LFC Liverpool Away 20/21 Original</p>
            <div>
                <p>Terjual 8</p>
                <div></div>
                <p>🌟 5</p>
            </div>
            <p>Rp658.000</p>
            </div>
            <div>
            <h1>Hallo</h1>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default ProdukDetail
