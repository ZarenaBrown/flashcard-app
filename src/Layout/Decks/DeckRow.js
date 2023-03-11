import React from "react";
import { Link } from "react-router-dom";

function DeckRow({ decks, deleteDeck }) {
    return (
        <tr>
            <th>{decks.name}</th>
            <th>{decks.card.count} cards</th>
            <td>{decks.description}</td>
            <td><Link to="/decks/:deckId"><button name="view">View</button></Link></td>
            <td><Link to="/decks/:deckId/study"><button name="study">Study</button></Link></td>
            <td><button name="delete" onClick={deleteDeck}><img className="photo src=photos/trashcan.png"/></button></td>
        </tr>
    );
}

export default DeckRow;