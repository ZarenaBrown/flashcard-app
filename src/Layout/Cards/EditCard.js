import React, { useEffect, useState } from "react";
import CardForm from "./CardForm";
import { useParams, Link, useHistory } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { readDeck, updateCard, readCard } from "../../utils/api/index";

/* Allows the user to modify information on an existing deck */

function EditCard() {
    const { deckId, cardId } = useParams();
    const history = useHistory();
    const [card, setCard] = useState({});
    const [deck, setDeck] = useState({});
    

    //Load deck and card
    useEffect(() => {
        const loadDeck = async () => setDeck(await readDeck(deckId));
        loadDeck();
        const loadCard = async () => setCard(await readCard(cardId));
        loadCard();
    }, [deckId, cardId]);

    //Create change handler for form
   const handleChange = ({ target }) => {
    setCard({
        ...card,
        [target.name]: target.value
    });
   };


   //Create submit handler to save edits
   const handleSubmit = (event) => {
    event.preventDefault();
    async function updateCardData() {
        try {
            await updateCard(card);
            history.push(`/decks/${deck.id}`);
        } catch (error) {
            if(error.name!=="AbortError") {
                throw error;
            }
        }
        
    }
    updateCardData();
   }

    return (
        <>
        <Breadcrumb link={`/decks/${deckId}`} linkName={`Deck ${deck.name}`} pageName={`Edit Card ${cardId}`} />
        <div className="row w-100" style={{marginLeft: "85px"}}>
            <div className="row w-100">
                <h1>Edit Deck</h1>
            </div>
            <div className="row" style={{ width: "85%"}}>
                <CardForm formData={card} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <div className="row w-100" style={{marginTop:"20px"}}>
                <Link to={`/decks/${deck.id}`}><button className="btn btn-secondary mr-1">Cancel</button></Link>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </div>
        </div>
        </>
    );
}

export default EditCard;