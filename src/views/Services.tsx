//IMPORTS
import React, {useState} from "react"
import Modal, {ModalProps} from "../components/Modal/Modal"
import {article} from "../types/types"
import articles from "../data/ServicesData"
import "../styles/services.scss"

const Services = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalData, setModalData] = useState<ModalProps>({
        title: '', img: '', description: '', open: openModal, onclose: setOpenModal
    })

    const handleCertifications = (art:article) => {
        setOpenModal(true)
        setModalData({
            title: art.title, img: art.img, description: art.fullDescription, open: openModal, onclose: setOpenModal
        })
    }

    const renderArticles = () => {
        return articles.map((art:article, indArt:number) => 
            <article onClick={() => handleCertifications(art)} className="pl-service" key={`pl-service-${art.title}-${indArt}`}>
                <i className="pls-icon pls-spray-icon"/>
                <h3 className="pl-h3 center">{art.title}</h3>
                <p className="pl-p center">
                    {art.description}
                </p>
            </article>
        )
    }

    return (
        <>
            <section className="pl-section services">
                {
                    renderArticles()
                }
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

export default Services