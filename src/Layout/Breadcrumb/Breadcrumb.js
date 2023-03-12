import React from "react";
import { Link } from "react-router-dom";
import CreateCard from "../Cards/CreateCard";
import EditCard from "../Cards/EditCard";
import CreateDeck from "../Decks/CreateDeck";
import EditDeck from "../Decks/EditDeck";

function Breadcrumb({ deck, isEditingDeck, isViewing, isStudying, isCreating, isNewCard, isEditingCard, cardId }) {
    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            {isViewing &&
                (
                <>
                <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </>
                )
                }
            {/* {isEditing &&
                (
                <>
                <li className="breadcrumb-item active" aria-current="page">{deck}</li>
                <li className="breadcrumb-item active" aria-current="page">{EditDeck}</li>
                <li className="breadcrumb-item active" aria-current="page">{EditCard}</li>
                </>
                )} */}
            {/* {isStudying &&
                (
                <>
                <li className="breadcrumb-item active" aria-current="page">{StudyCard}</li>
                <li className="breadcrumb-item active" aria-current="page">{StudyDeck}</li>
                </>
                )} */}
            {isCreating &&
                (
                <>
                <li className="breadcrumb-item active" aria-current="page">{CreateCard}</li>
                <li className="breadcrumb-item active" aria-current="page">{CreateDeck}</li>
                </>
                )}
            {/* {isStudying &&
                (
                <>
                <li className="breadcrumb-item active" aria-current="page">{study}</li>
                </>
                )} */}
        </ol>
        </nav>
    )
}

export default Breadcrumb;