//IMPORTS
import React from "react"
import "./banner.scss"

interface Brand {
    name: string,
    image: string,
    link: string
}

interface BannerProps {
    dataBrands: Brand[]
}

const Banner:React.FunctionComponent<BannerProps> = (props) => {

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
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-5.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 10",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-6.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 11",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-7.png",
            link: "http://google.cl"
        },
        {
            name: "Lorem ipsum 12",
            image: "https://gricel.sfo2.digitaloceanspaces.com/plaguisur/logo-empresa-8.png",
            link: "http://google.cl"
        }
    ]

    const renderBrands = (brands:Brand[]) => {
        let brandGroup:any = []
        let count = Math.ceil((brands.length / 4))
        for (let i = 0; i < count; i++){
            brandGroup.push([])
            for (let c = 1; c <= 4; c++) {
                let ref = i == 0 ? c : c * i
                console.log("ref", ref)
                brandGroup[i].push([ref])
                /*<article className="pls-brand-card" key={`brand-${brands[ref * (i + 1)].name}-${ref}`}>
                    <figure 
                        className="pls-brand-img"
                        style={{backgroundImage: `url("${brands[ref * (i + 1)].name}")`}}
                    />
                    <p className="pls-brand-name">
                        {brands[ref * (i + 1)].name}
                    </p>
                </article>*/   
            }
            console.log(brandGroup)
        }
        
        return brandGroup.map((brandG:any[], indexG:number) => (
            <div className="pls-banner-slide" key={`pls-banner-slide-${indexG}`}>
                { brandG }
            </div>
        ))
    }

    return (
        <div className="pls-banner">
            { renderBrands(brandsList) }
        </div>
    )
}

export default Banner