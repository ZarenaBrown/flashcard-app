import React, { useState } from "react";
import DeckForm from "./DeckForm";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

/* Allows the user to create a new deck */

function CreateDeck({ onAdd }) {
    const handleSubmit = (data) => {
        onAdd(data);
    };

    return (
        <>
            <Breadcrumb link={'/decks/new'} pageName={"Create Deck"} />
            <div>
                <h1>Create Deck</h1>
                <DeckForm onSubmit={handleSubmit} />
            </div>
        </>
    );
}

export default CreateDeck;