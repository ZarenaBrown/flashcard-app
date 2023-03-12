import React, { useState } from "react";
import CreateCard from "./CreateCard";
import { Link } from "react-router-dom";


function CardForm() {

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        CreateCard(formData);
        setFormData({ ...card });
    };

    const card = { 
        id: "",
        front: "",
        back: "",
        deckId: "",
    };

    const [formData, setFormData] = useState({ ...card });


    return (
        // <Breadcrumb CreateCard={CreateCard} isCreating={true} />
    <>
        <div>
            <h1>React Router: Add Card</h1>
        </div>
        <div>
            <label htmlFor="label">Front</label>
        </div>
        <textarea 
            id="front"
            name="front"
            type="text"
            placeholder="Front side of card"
            required={true}
            onChange={handleChange}
            value={formData.front}
        />
        <div>
            <label htmlFor="label">Front</label>
        </div>
        <textarea 
            id="back"
            name="back"
            type="text"
            placeholder="Back side of the card"
            required={true}
            onChange={handleChange}
            value={formData.back}
        />
        <div>
            <button type="done">Done</button>
            <Link to="/decks/:deckId"><button type="save">Save</button></Link>
        </div>
    </>
    );
}

export default CardForm;