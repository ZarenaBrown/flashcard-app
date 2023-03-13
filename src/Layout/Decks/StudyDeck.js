import React from "react";
import StudyCard from "../Cards/StudyCard";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

function StudyDeck({ cards }) {
    return (
        <>
        <Breadcrumb link={"/decks/:deckId/study"} pageName={"Study"} />
        <h1>Studying the {deck.name}</h1>
        <StudyCard cards={cards} />
        </>
    );
}

export default StudyDeck;