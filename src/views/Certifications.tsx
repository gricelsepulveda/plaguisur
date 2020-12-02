//IMPORTS
import React from "react"
import Button from "../components/Button/Button"
import "../styles/certifications.scss"

interface certificaction {
    name: string,
    text: string,
    imgUrl: string
}

const Certificactions = () => {

    const handleCertifications = () => {
    }

    const dataCertifications:certificaction[] = [
        {
            name: "Nombre de la certificación", text: "", imgUrl: ""
        },
        {
            name: "Nombre de la certificación", text: "", imgUrl: ""
        },
        {
            name: "Nombre de la certificación", text: "", imgUrl: ""
        }
    ]

    const renderCertifications = (certData:certificaction[]) => {
        return certData.map((cert, indCert) => (
            <li className="pl-cert-element" key={`${cert.name}-${indCert}`}>
                <i className="pls-icon pls-badge-icon"/>
                <span>{cert.name}</span>
            </li>
        ))
    }

    return (
        <section className="pl-section certifications">
            <article className="pl-certifications">
                <h1 className="pl-h1 center">Certificaciones</h1>
                <p className="pl-p left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque commodo. Enim pharetra, justo, felis integer sed. Lacus rutrum et auctor pellentesque ac pulvinar amet commodo cras. Amet maecenas scelerisque vulputate adipis.
                </p>
                <ul className="pl-certifications-list">
                   { renderCertifications(dataCertifications) }
                </ul>
                <p className="pl-p left">
                    ¿Quieres información sobre alguna otra certificación?
                </p>
                <Button
                    icon="arrow-right"
                    value="consúltanos"
                    color="color-1"
                    name="certificaciones"
                    action={handleCertifications}
                />
            </article>
        </section>
    )
}

export default Certificactions