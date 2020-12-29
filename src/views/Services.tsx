//IMPORTS
import React from "react"
import {article} from "../types/types"
import articles from "../data/ServicesData"
import "../styles/services.scss"

const Services = () => {

    const renderArticles = () => {
        return articles.map((art:article, indArt:number) => 
            <article className="pl-service" key={`pl-service-${art.title}-${indArt}`}>
                <i className="pls-icon pls-spray-icon"/>
                <h3 className="pl-h3 center">{art.title}</h3>
                <p className="pl-p center">
                    {art.description}
                </p>
            </article>
        )
    }

    return (
        <section className="pl-section services">
            {
                renderArticles()
            }
        </section>
    )
}

export default Services