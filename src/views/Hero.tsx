//IMPORTS
import React from "react"
import Button from "../components/Button/Button"
import "../styles/hero.scss"

const Hero = () => {

    const handleCotizar = () => {
    }

    return (
        <section className="pl-section hero">
            <article className="pl-section-main-text">
                <div className="pl-main-text">
                    <p className="pl-main-text-p">vive</p>
                    <h1 className="pl-main-text-h1">tus espacios</h1>
                    <div className="flex row center">
                        <p className="pl-main-text-p">con la</p>
                        <h2 className="pl-main-text-h2">naturaleza</h2>
                    </div>
                    <h3 className="pl-main-text-h3">en equilibrio</h3>
                    <span className="pl-main-text-span">Somos expertos en higiene abiental y control de plagas</span>
                    <Button
                        icon="arrow-right"
                        value="cotiza aquí"
                        color="color-1"
                        name="cotizar"
                        action={handleCotizar}
                    />
                </div>
            </article>
            <figure className="pl-hero-figure"/>
        </section>
    )
}

export default Hero