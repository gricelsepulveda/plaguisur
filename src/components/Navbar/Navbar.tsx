//IMPORTS
import React, {useState} from "react"
import "./navbar.scss"

type Link = {
    name: string, link: string
}

const Navbar:React.FunctionComponent = () => {

    const [openMenu, setOpenMenu] = useState<Boolean>(false)
    const [active, setActive] = useState("inicio")

    const handleLink = (link:Link) => {
        setActive(link.name)
        if (link.link.split("#").length < 2){
            window.open(link.link, "_blank")
        }
        else {

            const divElementPosition = document.getElementById(link.link)
            // @ts-ignore
            const pixelToScroll:number = divElementPosition != null ? divElementPosition.clientTop != undefined ? divElementPosition : 0 : 0

            window.scrollBy(0, pixelToScroll) //Scrolls to position
        }
    }

    const links:Link[] = [
        { name: "inicio", link: "#home" },
        { name: "quienes somos", link: "#us" },
        { name: "servicios", link: "#services" },
        { name: "certificaciones", link: "#certifications" },
        { name: "clientes", link: "#clients" },
        { name: "contacto", link: "#contact" }
    ]

    const renderLinks = (links:Link[]) => {
        return links.map((ln, ln_index) => (
            <li 
                onClick={() => handleLink(ln)}
                className={`ps-nav-links-li ${active == ln.name ? "active" : ""}`}
                key={`${ln.name} ${ln_index}`}
            >
                {ln.name}
            </li>
        ))
    }

    return (
        <nav className="ps-navbar">
            <img 
                className="logo-plaguisur"
                src="https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-landscape-transparente.png"
            />
            <button className="ps-mobile-menu" onClick={() => setOpenMenu(!openMenu)}>
                <i className="pls-icon pls-menu-icon"/>
            </button>
            <ul className={`ps-nav-links ${openMenu ? "open" : ""}`}>
                { renderLinks(links) }
            </ul>
        </nav>
    )
}

export default Navbar