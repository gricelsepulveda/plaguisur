//IMPORTS
import React from "react"
import Button from "../components/Button/Button"
import { certification } from "../types/types"
import {TitleCertificationSection, dataCertifications} from "../data/CertificationsData"
import "../styles/certifications.scss"


const Certificactions = () => {

    const handleCertifications = () => {
    }

    const renderCertifications = (certData:certification[]) => {
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
                <h1 className="pl-h1 center">{TitleCertificationSection.title}</h1>
                <p className="pl-p left">
                    {TitleCertificationSection.description}
                </p>
                <ul className="pl-certifications-list">
                   { renderCertifications(dataCertifications) }
                </ul>
                <p className="pl-p left">
                    {TitleCertificationSection.subtitle}
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