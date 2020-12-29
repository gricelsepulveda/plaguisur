//IMPORTS
import React from "react"
import Button from "../components/Button/Button"
import usData from "../data/UsData"
import "../styles/us.scss"

const Us = () => {

    const handleUs = () => {
    }

    return (
        <section className="pl-section us"  id="us">
            <h1 className="pl-h1 center">{usData.title}</h1>
            <p className="pl-p center">
                {usData.description}
            </p>
            <span className="pl-span center">
               {usData.note}
            </span>
            <Button
                disabled={false}
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