//IMPORTS
import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "./Hero"
import Us from "./Us"
import Services from "./Services"
import Certifications from "./Certifications"
import Banner from "../components/Banner/Banner"
import "../styles/home.scss"

const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Us/>
            <Services/>
            <Certifications/>
            <Banner dataBrands={[]}/>
        </>
    )
}

export default Home