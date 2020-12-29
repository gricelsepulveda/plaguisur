import {certification, TitlesSection } from "../types/types"

interface titleCertificationSection extends TitlesSection {
    subtitle: string
}

const TitleCertificationSection:titleCertificationSection = {
    title: "Certificaciones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula pharetra nibh ultrices scelerisque commodo. Enim pharetra, justo, felis integer sed. Lacus rutrum et auctor pellentesque ac pulvinar amet commodo cras. Amet maecenas scelerisque vulputate adipis.",
    subtitle: "¿Quieres información sobre alguna otra certificación?"
}

const dataCertifications:certification[] = [
    {
        name: "Nombre de la certificación", text: "", imgUrl: ""
    },
    {
        name: "Nombre de la certificación", text: "", imgUrl: ""
    },
    {
        name: "Nombre de la certificación", text: "", imgUrl: ""
    }
]



export {TitleCertificationSection, dataCertifications}