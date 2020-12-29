//IMPORTS
import React from "react"
import Banner from "../components/Banner/Banner"
import "../styles/clients.scss"
import Quote from "../components/Quote/Quote"
import { clientsData, brandsList, quoteData} from "../data/ClientsData"

const Clients = () => {

    return (
        <section className="pl-section clients">
            <h1 className="pl-h1 center">{clientsData.title}</h1>
            <p className="pl-p center">
                {clientsData.description}
            </p>
            <Banner dataBrands={brandsList}/>
            <Quote data={quoteData}/>
        </section>
    )
}

export default Clients