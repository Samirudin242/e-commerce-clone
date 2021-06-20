import React, {useState, useEffect, useRef} from 'react';
import {gql, useQuery, NetworkStatus} from "@apollo/client";

import { sliderData } from "../image/sliderData";
import "../components/style/allProducts.css"
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {sortingTermurah, sortingTermahal} from "../helper/sorting";

import InputForm from "../components/InputForm";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Card from "../components/Card";

const getAllDataProducts = gql`
    query getAllData {
        getProduks {
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

function AllProducts() {

    const {loading, error, data, refetch, networkStatus} = useQuery(getAllDataProducts);
    const [isExpand, setExpand] = useState(false);
    const [sorting, setSorting] = useState("Termurah");
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        document.title = "All Product | React App"
    }, [])

    const setExpandMenu = () => {
        setExpand(!isExpand)
    }
    // refetch (() => {
    //     setDatas(data?.produks)
    // })

    const sortingMurah = () => {
        setSorting("Termurah")
        setExpand(!isExpand)
        console.log(data.produks);
        let arr = data.produks;
        let array = sortingTermurah(arr)
        console.log(array, "sort");
        setDatas(array)
        console.log(datas, "sorting");
        // console.log(datas[0], "sing");

    }

 
    function setSortingChoice (choice) {
        setSorting(choice)
        setExpand(!isExpand)
    }


    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

        // console.log(datas, "«««««");
        // console.log(data, "«««««");

    return (
        <div>
            <InputForm/>
            <Carousel slide={sliderData} />
            <div className="container-all-products">
            <div className="sorting-products">
                <p onClick={setExpandMenu}>Urutkan: <span className="sorting-name">{sorting}</span> {isExpand ? < FiChevronUp  size={15} /> :  < FiChevronDown size={15} />} </p>
                {isExpand && (
                <div className="sorting-products-menu">
                    <p onClick={sortingMurah}>Termurah</p>
                    <p onClick={() =>  setSortingChoice("Termahal")}>Termahal</p>
                    <p onClick={() =>  setSortingChoice("Terlaris")}>Terlaris</p>
                    <p onClick={() =>  setSortingChoice("Rating Tertinggi")}>Rating Tertinggi</p>
                    <p onClick={() =>  setSortingChoice("Diskon Terbesar")}>Diskon Terbesar</p>
                </div>
                )}
            </div>
            <div className="card-products">
                {datas !== null ? <Card datas={datas}/> : <Card datas={data.getProduks}/>}
                {/* <Card datas={data.produks}/> */}
            </div>
            </div>
        <Footer />
        </div>
    )
}

export default AllProducts
