import React from "react";
import CardForm from "./CardForm";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

/* Allows the user to add a new card to an existing deck */

function CreateCard({ onAdd }) {
    const handleSubmit = (data) => {
        onAdd(data);
    };

    return (
        <>
        <Breadcrumb link={"/decks/:deckId/cards/new"} pageName={"Add Card"} />
        <div>
            <h1>React Router: Add Card</h1>
            <CardForm onSubmit={handleSubmit} />
        </div>
        
        </>
    );
}

export default CreateCard;