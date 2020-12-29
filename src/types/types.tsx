export type Brand = {
    name: string,
    image: string,
    link: string
}

export type Quotes = {
    title: string,
    image: string,
    text: string
}

export type TitlesSection = {
    title: string,
    description: string
}

export type FooterInfo = {
    logo: string,
    linkPhone: {
        link: number,
        phone: string
    },
    linkEmail: {
        link: string,
        email: string
    },
    text: string
}

export type ContactInfo = {
    subject: string,
    emailTo: string
}

export type certification = {
    name: string,
    text: string,
    imgUrl: string
}

export type article = {
    icon: string, title: string, description: string
}

export type heroInfo = {
    firstWords: string,
    secondWords: string,
    thirdWords: string,
    fourthWords: string,
    lastWords: string,
    claim: string
}
