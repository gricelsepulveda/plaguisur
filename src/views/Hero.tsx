//IMPORTS
import React from "react"
import Button from "../components/Button/Button"
import heroData from "../data/HeroData"
import "../styles/hero.scss"

const Hero = () => {

    const handleCotizar = () => {
    }

    return (
        <section className="pl-section hero" id="home">
            <article className="pl-section-main-text">
                <div className="pl-main-text">
                    <p className="pl-main-text-p">{heroData.firstWords}</p>
                    <h1 className="pl-main-text-h1">{heroData.secondWords}</h1>
                    <div className="flex row center">
                        <p className="pl-main-text-p">{heroData.thirdWords}</p>
                        <h2 className="pl-main-text-h2">{heroData.fourthWords}</h2>
                    </div>
                    <h3 className="pl-main-text-h3">{heroData.lastWords}</h3>
                    <span className="pl-main-text-span">{heroData.claim}</span>
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