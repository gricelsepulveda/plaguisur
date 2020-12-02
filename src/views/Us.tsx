//IMPORTS
import React from "react"
import Button from "../components/Button/Button"
import "../styles/us.scss"

const Us = () => {

    const handleUs = () => {
    }

    return (
        <section className="pl-section us">
            <h1 className="pl-h1 center">Quiénes somos</h1>
            <p className="pl-p center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque commodo. Enim pharetra, justo, felis integer sed. Lacus rutrum et auctor pellentesque ac pulvinar amet commodo cras. Amet maecenas scelerisque vulputate adipiscing bibendum enim. Massa risus pulvinar varius purus, nunc nec. Sodales libero pharetra adipiscing vitae ut purus. Id tristique in blandit faucibus elit ornare nec neque. Elementum commodo at elementum sed ornare molestie ipsum congue cursus
            </p>
            <span className="pl-span center">
                Conoce nuestra misión, visión y garantías en nuestro resumen empresarial
            </span>
            <Button
                icon="arrow-down"
                value="descargar resumen"
                color="color-1"
                name="mision y visión"
                action={handleUs}
            />
        </section>
    )
}

export default Us