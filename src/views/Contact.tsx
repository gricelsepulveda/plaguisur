//IMPORTS
import React, { useState, useEffect } from "react"
import Input from "../components/Input/Input"
import Textarea from "../components/Textarea/Textarea"
import Button from "../components/Button/Button"
import { ContactForm, ContactData } from "../data/ContactData"
import "../styles/contact.scss"

type form = {
    name: string, email: string, message: string
}

type error = {
    nameError: boolean, nameErrorText: string, emailError: boolean, emailErrorText: string, messageError: boolean, messageErrorText: string
}

const Clients = () => {
    const [formContactData, setFormContactData] = useState<form>({
        name: '',
        email: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState<error>({
        nameError: true, nameErrorText: '', emailError: true, emailErrorText: '', messageError: true, messageErrorText: ''
    })

    const handleName = (name:string) => {
        if (name.length < 3){
            setFormErrors({
                nameError: true, nameErrorText: 'No se puede usar un nombre con menos de 4 caracteres', emailError: formErrors.emailError, emailErrorText: formErrors.emailErrorText, messageError: formErrors.messageError, messageErrorText: formErrors.messageErrorText
            })
        }
        else {
            setFormErrors({
                nameError: false, nameErrorText: '', emailError: formErrors.emailError, emailErrorText: formErrors.emailErrorText, messageError: formErrors.messageError, messageErrorText: formErrors.messageErrorText
            })
        }
        setFormContactData({
            name: name,
            email: formContactData.email,
            message: formContactData.message
        })
    }

    const handleEmail = (email:string) => {
        function validateEmail(_email:string) {
            const emailVal = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return emailVal.test(String(_email).toLowerCase())
        }
        if (validateEmail(email) == false){
            setFormErrors({
                nameError: formErrors.nameError, nameErrorText: formErrors.nameErrorText, emailError: true, emailErrorText: 'No se puede dejar en blanco o escribir algo que no sea un correo', messageError: formErrors.messageError, messageErrorText: formErrors.messageErrorText
            })
        }
        else {
            setFormErrors({
                nameError: formErrors.nameError, nameErrorText: formErrors.nameErrorText, emailError: false, emailErrorText: '', messageError: formErrors.messageError, messageErrorText: formErrors.messageErrorText
            })
        }
        setFormContactData({
            name: formContactData.name,
            email: email,
            message: formContactData.message
        })
    }

    const handleMessage = (message:string) => {
        if (message.length < 5){
            setFormErrors({
                nameError: formErrors.nameError, nameErrorText: formErrors.nameErrorText, emailError: formErrors.emailError, emailErrorText: formErrors.emailErrorText, messageError: true, messageErrorText: 'No se puede dejar en blanco o inferior a 5 caracteres'
            })
        }
        else {
            setFormErrors({
                nameError: formErrors.nameError, nameErrorText:formErrors.nameErrorText,  emailError: formErrors.emailError, emailErrorText: formErrors.emailErrorText, messageError: false, messageErrorText: ''
            })
        }
        setFormContactData({
            name: formContactData.name,
            email: formContactData.email,
            message: message
        })
    }

    useEffect(() => {}, [formContactData, formErrors])

    return (
        <section className="pl-section contact"  id="contact">
            <h1 className="pl-h1 center">{ContactData.title}</h1>
            <p className="pl-p center">
                {ContactData.description}
            </p>
            <form className="pl-contact-form" action="../mailer/mailer.php" method="post">
                <Input
                    placeholder="Tu nombre"
                    disabled={false}
                    TextError={formErrors.nameErrorText}
                    error={formErrors.nameError}
                    value=""
                    onChange={handleName}
                    name="name"
                />
                <Input
                    placeholder="Tu correo"
                    disabled={false}
                    TextError={formErrors.emailErrorText}
                    error={formErrors.emailError}
                    value=""
                    onChange={handleEmail}
                    name="email"
                />
                <Textarea
                    placeholder="Tu mensaje"
                    disabled={false}
                    TextError={formErrors.messageErrorText}
                    error={formErrors.messageError}
                    value=""
                    onChange={handleMessage}
                    name="message"
                />
                 <Button
                    icon="arrow-right"
                    value="enviar"
                    color="color-1"
                    name="enviar"
                    disabled={formErrors.nameError || formErrors.emailError || formErrors.messageError ? true : false}
                    action={() => null}
                />
            </form>
        </section>
    )
}

export default Clients