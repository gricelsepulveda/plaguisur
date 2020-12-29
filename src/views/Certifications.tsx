//IMPORTS
import React, {useState} from "react"
import Button from "../components/Button/Button"
import Modal, {ModalProps} from "../components/Modal/Modal"
import { certification } from "../types/types"
import {TitleCertificationSection, dataCertifications} from "../data/CertificationsData"
import "../styles/certifications.scss"


const Certificactions = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalData, setModalData] = useState<ModalProps>({
        title: '', img: '', description: '', open: openModal, onclose: setOpenModal
    })

    const handleCertifications = (cert:certification) => {
        setOpenModal(true)
        setModalData({
            title: cert.name, img: cert.imgUrl, description: cert.text, open: openModal, onclose: setOpenModal
        })
    }

    const renderCertifications = (certData:certification[]) => {
        return certData.map((cert, indCert) => (
            <li onClick={() => handleCertifications(cert)} className="pl-cert-element" key={`${cert.name}-${indCert}`}>
                <i className="pls-icon pls-badge-icon"/>
                <span>{cert.name}</span>
            </li>
        ))
    }

    return (
        <>
            <section className="pl-section certifications"  id="certifications">
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
                        action={() => handleCertifications}
                    />
                </article>
            </section>
            <Modal 
                img={modalData.img}
                title={modalData.title}
                description={modalData.description}
                onclose={setOpenModal}
                open={openModal}
            />
        </>
    )
}

export default Certificactions