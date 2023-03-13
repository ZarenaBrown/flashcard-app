import React, { useState } from "react";
import { Link } from "react-router-dom";



function DeckForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventdefault();
        onsubmit({ name, description });
    };


    return (
        // <Breadcrumb CreateDeck={CreateDeck} isCreating={true} />
    <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
        >
        <label htmlFor="name">Name</label>
            <input 
                id="name"
                name="name"
                type="text"
                placeholder="Deck Name"
                required={true}
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
        <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                type="text"
                placeholder="Brief description of the deck"
                required={true}
                onChange={(event) => setDescription(event.target.value)}
                value={description}
            />
            <Link to="/"><button type="cancel">Cancel</button></Link>
            <Link to="/decks/:deckId"><button type="submit">Submit</button></Link>
    </form>
    );
}

export default DeckForm;