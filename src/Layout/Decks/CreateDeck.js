import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Navigation";

/* Allows the user to create a new deck */

function CreateDeck({ createDeck }) {

    const deck = { 
        id: "",
        name: "",
        description: "",
    };

    const [formData, setFormData] = useState({ ...deck });

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createDeck(formData);
        setFormData({ ...deck });
    };

    return (
        <form onSubmit={handleSubmit} name="CreateDeck">
        <div>
            <h1>Create Deck</h1>
            <div><label htmlFor="name">Name</label></div>
            <input 
                id="name"
                name="name"
                type="text"
                placeholder="Deck Name"
                required={true}
                onChange={handleChange}
                value={formData.name}
            />
        </div>
        <div>
            <div><label htmlFor="description">Description</label></div>
            <textarea
                id="description"
                name="description"
                type="text"
                placeholder="Brief description of the deck"
                required={true}
                onChange={handleChange}
                value={formData.description}
            />
        </div>
        <div>
            <Link to="/"><button type="cancel">Cancel</button></Link>
            <Link to="/decks/:deckId"><button type="submit">Submit</button></Link>
        </div>
        </form>
    );
}

export default CreateDeck;