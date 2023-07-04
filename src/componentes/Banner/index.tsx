import './Banner.css'
import React from "react";

interface BannerProps {
    enederecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enederecoImagem, textoAlternativo } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enederecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner;