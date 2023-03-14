import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import StudyCard from "./StudyCard";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

function StudyDeck() {
    const [deck, setDeck] = useState({});
    const {deckId} = useParams();

    useEffect(() => {

        async function loadDeck() {

            const newDeck = await readDeck(deckId);
            setDeck(newDeck);
            console.log(newDeck);
        };
        loadDeck();

    }, [deckId]);

    if(deck.length) {
        return (
            <section>
                 <Breadcrumb link={`/decks/${deckId}`} linkName={deck.name} pageName={"Study"} />
                 <div className="row" style={{marginLeft:"auto", paddingLeft: "80px"}}>
                     <h2>Study: {deck.name}</h2>
                 </div>
                <div className="row">
                    <StudyCard cards={deck.cards} />
                 </div>
            </section>
        )
    }

    return (
        <h3>Loading...</h3>
    )
}

export default StudyDeck;