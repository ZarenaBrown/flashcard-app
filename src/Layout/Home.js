import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

/* 	Shows a list of decks with options to create, study, view, or delete a deck */

function Home() {
    // const [decks, setDecks] = useState(...decks);

    return (
        <div>
            <div>
                <Link to="/decks/new"><button className="btn btn-primary btn-large"><i className="bi bi-plus"></i>Create Deck</button></Link>
            </div>
        </div>
    );
}

export default Home;
