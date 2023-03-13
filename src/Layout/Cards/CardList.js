import React from "react";
import { Link } from "react-router-dom";

function CardList({ cards }) {
    return cards.map((card, index) => (
        <CardEntry card={card} cardIndex={index} />
    ));
}

function CardEntry({ card, cardIndex }) {
    return (
        <div style={{ border: "1px solid black" }}>
            <div>{card.front}</div>
            <div>{card.back}</div>
            <Link to={"/cards/edit/" + cardIndex}>Edit</Link>
        </div>
    );
}

export default CardList;