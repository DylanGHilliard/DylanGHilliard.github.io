import React, { useState } from "react"
import './Card.css'
import GameModal from "./GameModal"

interface CardProps  {
    imageSrc: string;
    link: string;
    gameTitle: string;
    iframeSrc: string

}


const Card: React.FC<CardProps>  = ({imageSrc, link, gameTitle, iframeSrc}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="card" onClick={() => setIsModalOpen(true)}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="icon-wrapper"></a>
                <img src={imageSrc} className="card" alt={gameTitle} />
            </div>
            <GameModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                gameTitle={gameTitle}
                gameIframeSrc={iframeSrc}
            />
        </>
    )

}

export default Card