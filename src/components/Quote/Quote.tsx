//IMPORTS
import React from "react"
import "./quote.scss"
import {Quotes} from "../../types/types"

type QuoteProps = {
    data: Quotes[]
}

const Quote:React.FunctionComponent<QuoteProps> = (props) => {
    const renderQuotes = () => {
        return props.data.map((item:Quotes, index:number) => (
            <article className="ps-quote" key={`ps-quote-${index}`}>
                <figure className="ps-quote-img">
                    <img src={item.image} alt={item.title}/>
                </figure>
                <div className="ps-quote-wrapper">
                    <h3 className="ps-quote-title">
                        <i className="pls-icon pls-quote-left-icon"/>
                        {item.title}
                        <i className="pls-icon pls-quote-right-icon"/>
                    </h3>
                    <p className="ps-quote-text">
                        
                        {item.text}
                    </p>
                </div>
            </article>
        ))
    }
    return (
        <>
            { renderQuotes() }
        </>
    )
}

export default Quote
