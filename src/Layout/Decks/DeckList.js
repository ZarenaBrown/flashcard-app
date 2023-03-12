import React from "react";
import DeckView from "./DeckView";

function DeckList({ decks, deleteDeck }) {
    decks.map((deck, index) => (
        <DeckView 
            deleteDeck={() => deleteDeck(index)}
            key={index}
            deck={deck}
        />
    )
    );
}

export default DeckList;