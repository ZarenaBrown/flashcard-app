import React from "react";
import { Link } from "react-router-dom";

function DeckList({ decks, deleteDeck }) {
    return decks.map((deck, index) => (
        <DeckEntry deck={deck} deckIndex={index} />
    ));
}

function DeckEntry({ deck, deckIndex}) {
    return (
        <div style={{ border: "1px solid black" }}>
            <div>{deck.name}</div>
            <div>{deck.description}</div>
            <Link to={"/decks/edit" + deckIndex}>Edit</Link>
        </div>
    );
}

export default DeckList;