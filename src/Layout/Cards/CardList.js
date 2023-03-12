import React from "react";

function CardList({ cards }) {
    const cardList = cards?.map((card) =>  
        <Card   
            card={card}   
            id={card.id}  
            key={card.id}
        />
    )

    return (
        <div style = {{ listStyleType:"none" }}>  
         {cardList}
        </div>
    )
}

export default CardList;