//IMPORTS
import React from "react"
import "./button.scss"

interface ButtonProps {
    icon: string, name: string, value: string, color: string, action: (name:string) => void;
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {
    
    const Action = () => {
        props.action(props.name)
    }

    return (
        <div className={`ps-button ${props.color}`}>
            <button name={props.name} className="ps-button-btn" onClick={() => Action()}>
                {
                    props.icon != "" ?
                        <i className={`pls-icon pls-${props.icon}-icon`}/>:
                    <></>
                }
                {
                    props.value
                }
            </button>
        </div>
    )
}

export default Button