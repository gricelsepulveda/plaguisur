//IMPORTS
import React from "react"
import Hero from "./Hero"
import Us from "./Us"
import Services from "./Services"
import Certifications from "./Certifications"
import Clients from "./Clients"
import Contact from "./Contact"
import Footer from "./Footer"
import "../styles/home.scss"

const Home = () => {
    return (
        <>
            <Hero/>
            <Us/>
            <Services/>
            <Certifications/>
            <Clients/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home