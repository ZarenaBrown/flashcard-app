import React from "react";
import { Link } from "react-router-dom";
import CardList from "./CardList";

function CardView({ cards }) {
    return (
        <>
        <h1>Cards</h1>
        <CardList cards={cards} />
        <Link to="/cards/study">Study</Link>
        </>
    );
}

export default CardView;