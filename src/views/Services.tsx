//IMPORTS
import React from "react"
import "../styles/services.scss"

interface article {
    icon: string, title: string, description: string
}

const Services = () => {

    const articles:article[] = [
        {
            icon: "spray",
            title: "Nombre del servicio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra."
        },
        {
            icon: "spray",
            title: "Nombre del servicio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra."
        },
        {
            icon: "spray",
            title: "Nombre del servicio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra."
        },
        {
            icon: "spray",
            title: "Nombre del servicio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra."
        },
        {
            icon: "spray",
            title: "Nombre del servicio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra."
        },
        {
            icon: "spray",
            title: "Nombre del servicio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra."
        }
    ]

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