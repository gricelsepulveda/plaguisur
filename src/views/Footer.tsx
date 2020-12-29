//IMPORTS
import React from "react"
import "../styles/footer.scss"
import FooterData from "../data/FooterData"

const Footer = () => {

    return (
        <footer className="ps-footer">
             <img 
                className="logo-plaguisur"
                src={FooterData.logo}
            />
            <div className="ps-footer-contact">
                <div className="ps-footer-contact-info">
                    <a href={`tel:+${FooterData.linkPhone.link}`}>
                        <i className="pls-icon pls-phone-icon"/>
                        {FooterData.linkPhone.phone}
                    </a>
                    <a href={FooterData.linkEmail.link}>
                        <i className="pls-icon pls-email-icon"/>
                        {FooterData.linkEmail.email}
                    </a>
                </div>
                <p className="ps-footer-contact-p">
                    {FooterData.text}
                </p>
            </div>
        </footer>
    )
}

export default Footer