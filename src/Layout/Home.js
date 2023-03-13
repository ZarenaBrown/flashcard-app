import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import DeckList from "./Decks/DeckList";
import DeckView from "./Decks/DeckView";

/* 	Shows a list of decks with options to create, study, view, or delete a deck */

function Home({ decks }) {

    return (
        <div>
            <div>
                <Link to="/decks/new"><button className="btn btn-primary btn-large"><i className="bi bi-plus"></i>Create Deck</button></Link>
            </div>
            {/* <DeckView decks={decks} /> */}
        </div>
    );
}

export default Home;
