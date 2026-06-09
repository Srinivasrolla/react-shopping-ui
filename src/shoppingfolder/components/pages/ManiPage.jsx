import React, {useState} from "react";
import Banner from "../Banner";
import Header from "../Header";
import Collections from "../Collections";
import Footer from "../Footer";
import {Gents} from "../../data";
import {Ladies} from "../../data";
import WomenCollections from "../WomenCollections";


const MainPage = () => {
    const [gentsFashion,setGentsFashion] = useState(Gents)
    const [womenFashion,setWomenFashion] = useState(Ladies)
  return (
    <div>
        <Header />
        <Banner />
        <Collections  gentsFashion = {gentsFashion} />
        <WomenCollections womenFashion = {womenFashion} />
        <Footer />
    </div>
  )
}

export default MainPage