import React, { useState } from "react";
// import { Link } from "react-router-dom";


function CardForm({ onSubmit}) {
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ front, back });
    };

    return (
        // <Breadcrumb CreateCard={CreateCard} isCreating={true} />
    <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column" }}
    >
        <label htmlFor="label">Front</label>
        <textarea display="flex" flex-direction="column"
            id="front"
            name="front"
            type="text"
            placeholder="Front side of card"
            required={true}
            onChange={(event) => setFront(event.target.value)}
            value={front}
        />
            <label htmlFor="label">Back</label>
        <textarea 
            id="back"
            name="back"
            type="text"
            placeholder="Back side of the card"
            required={true}
            onChange={(event) => setBack(event.target.value)}
            value={back}
        />
            <button type="done">Done</button>
            <button type="save">Save</button>
    </form>
    );
}

export default CardForm;