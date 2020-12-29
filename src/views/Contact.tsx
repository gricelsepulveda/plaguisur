//IMPORTS
import React, { useState } from "react"
import Input from "../components/Input/Input"
import Textarea from "../components/Textarea/Textarea"
import Button from "../components/Button/Button"
import { ContactForm, ContactData } from "../data/ContactData"
import "../styles/contact.scss"

type form = {
    name: string, email: string, message: string
}

const Clients = () => {
    const [formContactData, setFormContactData] = useState<form>({
        name: '',
        email: '',
        message: ''
    })

    const handleName = (name:string) => {
        setFormContactData({
            name: name,
            email: formContactData.email,
            message: formContactData.message
        })
    }

    const handleEmail = (email:string) => {
        setFormContactData({
            name: formContactData.name,
            email: email,
            message: formContactData.message
        })
    }

    const handleMessage = (message:string) => {
        setFormContactData({
            name: formContactData.name,
            email: formContactData.email,
            message: message
        })
    }

    const handleSend = () => {

    }

    return (
        <section className="pl-section contact"  id="contact">
            <h1 className="pl-h1 center">{ContactData.title}</h1>
            <p className="pl-p center">
                {ContactData.description}
            </p>
            <form className="pl-contact-form">
                <Input
                    placeholder="Tu nombre"
                    disabled={false}
                    TextError="No se puede dejar vacío"
                    error={false}
                    value=""
                    onChange={handleName}
                />
                <Input
                    placeholder="Tu correo"
                    disabled={false}
                    TextError="El texto no hace match con un correo"
                    error={true}
                    value=""
                    onChange={handleEmail}
                />
                <Textarea
                    placeholder="Tu mensaje"
                    disabled={false}
                    TextError="No se puede dejar vacío"
                    error={false}
                    value=""
                    onChange={handleMessage}
                />
                 <Button
                    icon="arrow-right"
                    value="enviar"
                    color="color-1"
                    name="enviar"
                    action={handleSend}
                />
            </form>
        </section>
    )
}

export default Clients