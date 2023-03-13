import React from "react";
import CardForm from "./CardForm";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

/* Allows the user to modify information on an existing card */

function EditCard({ onEdit }) {
    const { cardIndex } = useParams();

    const handleSubmit = (data) => {
        onEdit(cardIndex, data);
    };

    return (
        <>
        <Breadcrumb link={"/decks/:deckId/cards/:cardId/edit"} pageName={"Edit Card"} />
        <div>
            <h1>Edit Card {cardIndex}</h1>
            <CardForm onSubmit={handleSubmit} />
        </div>
        </>
    );
}


export default EditCard;