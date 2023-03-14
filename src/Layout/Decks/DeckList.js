import React from "react";
import { Link } from "react-router-dom";
import DeleteDeckButton from "./DeleteDeck";

function DeckList({ decks }) {

    return (
        <div style={{ width: "80%", margin: "8px auto" }}>
            <a className="btn btn-primary" href="/decks/new" type="button" style={{ margin:"10px 5px" }}>Create Deck</a>
            <ul className="list-group">
            {decks.map((deck, index) => (
                <li key={index} className="list-group-item" style={{ marginLeft: "5px", marginBottom: "10px", border: "1px solid grey"}}>
                    <div key={index} className="card-body">
                    <h5>{deck.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
                    <p>{deck.description} </p>
                    <Link to={`/decks/${deck.id}`} type="button" className="btn btn-primary" style={{ justifyContent:"space-around", marginRight: "5px" }}>View</Link>
                    <Link to={`/decks/${deck.id}/study`} type="button" className="btn btn-primary" style={{ justifyContent:"space-around", marginRight: "5px" }}>Study</Link>
                    <DeleteDeckButton deckId={deck.id} />
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}


export default DeckList;