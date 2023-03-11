import React from "react";
import DeckRow from "./DeckRow";

function DeckList({ decks, deleteDeck }) {
    return (
        <div className="deck-list">
            <table>
                <tr>
                    <DeckRow />
                </tr>
                <tbody>
                    {decks.map((deck, index) => (
                        <DeckRow 
                            deleteDeck={() => deleteDeck(index)}
                            key={index}
                            deck={deck}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeckList;