//IMPORTS
import React, { useState, useEffect} from "react"
import {Brand} from "../../types/types"
import "./banner.scss"

type BannerProps = {
    dataBrands: Brand[]
}

const Banner:React.FunctionComponent<BannerProps> = (props) => {
    const [active, setActive] = useState<number>(0)

    const animation =
        setInterval(() => {
            if (active < 2){
                setActive(active + 1)
            } else {
                setActive(0)
            }
            clearInterval(animation)
        }, 2000)

    const brandsList:Brand[] = [
        {
            name: "Lorem ipsum 1",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-1.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 2",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-2.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 3",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-3.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 4",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-4.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 5",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-1.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 6",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-2.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 7",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-3.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 8",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-4.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 9",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-1.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 10",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-2.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 11",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-3.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 12",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-4.png",
            link: "http://google.cl"
        }
    ]

    const renderBrands = (brands:Brand[]) => {
        let brandGroup:any[] = []
        let count = Math.ceil((brands.length / 4))
        for (let i = 0; i < count; i++){
            brandGroup.push([])
            for (let c = 1; c <= 4; c++) {
                let ref = ((i * 4) + c) - 1
                brandGroup[i].push(
                    <a className="pls-brand-card-wrapper" key={`brand-${brands[ref].name}-${ref}`} href={brands[ref].link} target="blank">
                        <article className="pls-brand-card">
                            <figure 
                                className="pls-brand-img"
                                style={{backgroundImage: `url("${brands[ref].image}")`}}
                            />
                            <p className="pls-brand-name">
                                {brands[ref].name}
                            </p>
                        </article>
                    </a>
                )
            }
        }
        return brandGroup.map((brandG:any[], indexG:number) => (
            <div 
                className="pls-banner-slide"
                key={`pls-banner-slide-${indexG}`}
            >
                { brandG }
            </div>
        ))
    }
    const handleClick = (x:number) => {
        setActive(x)
        clearInterval(animation)
    }

    const renderControls = () => {
        let controls:JSX.Element[] = []
        for (let x=0; x < 3; x++){
            controls.push(
                <button 
                    type="button"
                    className={`pls-banner-control ${active == x ? 'active' : ''}`}
                    onClick={() => handleClick(x)}
                    key={`btn-control-${x}`}
                />
            )
        }
        return controls
    }

    useEffect(() => {
        animation
    }, [active])

    return (
        <div className="pls-banner">
            <div className="pls-banner-wraapper" style={{left: `-${active * 100}%`}}>
                { renderBrands(props.dataBrands.length < 0 ? props.dataBrands : brandsList) }
            </div>
            <nav className="pls-banner-controls">
                {
                    renderControls()
                }
            </nav>
        </div>
    )
}

export default Banner
