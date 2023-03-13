import React from "react";
import DeckForm from "./DeckForm";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

/* Allows the user to modify information on an existing deck */

function EditDeck({ onEdit }) {
    const { deckIndex } = useParams();

    const handleSubmit = (data) => {
        onEdit(deckIndex, data);
    };

    return (
        <>
        <Breadcrumb link={"/decks/:deckId/edit"} pageName={"Edit Deck"} />
        <div>
            <h1>Edit Deck {deckIndex}</h1>
            <DeckForm onSubmit={handleSubmit} />
        </div>

        </>
    );
}

export default EditDeck;