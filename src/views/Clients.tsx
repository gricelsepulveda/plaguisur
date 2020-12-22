//IMPORTS
import React from "react"
import Banner from "../components/Banner/Banner"
import "../styles/clients.scss"

const Clients = () => {

    const handleUs = () => {
    }

    return (
        <section className="pl-section clients">
            <h1 className="pl-h1 center">Nuestros clientes</h1>
            <p className="pl-p center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque commodo. Enim pharetra, justo, felis integer sed.
            </p>
            <Banner dataBrands={[]}/>
        </section>
    )
}

export default Clients