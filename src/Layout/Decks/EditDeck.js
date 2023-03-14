import React, { useEffect, useState } from "react";
import DeckForm from "./DeckForm";
import { useParams, Link, useHistory } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { readDeck, updateDeck } from "../../utils/api/index";

/* Allows the user to modify information on an existing deck */

function EditDeck() {

    const initialFormState = {
        name: "",
        description: ""
    };

    const [deck, setDeck] = useState({...initialFormState});
    const history = useHistory();
    const { deckId } = useParams();

    useEffect(() => {
        async function loadDeck() {
            try {
                const loadedDeck = await readDeck(deckId);
                setDeck(loadedDeck);
            } catch (error) {
                if(error.name!=="AbortError") {
                    throw error;
                }
            }
        }
        loadDeck();
    }, [deckId]);

   const handleChange = ({ target }) => {
    setDeck({
        ...deck,
        [target.name]: target.value
    });
   };

   const handleSubmit = (event) => {
    event.preventDefault();
    async function updateDeckData() {
        await updateDeck(deck);
        history.push(`/decks/${deck.id}`);
    }
    updateDeckData();
   }

    return (
        <>
        <Breadcrumb link={`/decks/${deckId}/edit`} linkName={deck.name} pageName={"Edit Deck"} />
        <div className="container" style={{marginLeft: "80px"}}>
            <div className="row">
                <h1>Edit Deck</h1>
                <br />
            </div>
            <div className="row w-100">
                
                <DeckForm onSubmit={handleSubmit} handleChange={handleChange} formData={deck} />
            </div>
            <div className="row" style={{marginTop:"20px"}}>
                <Link to={`/decks/${deck.id}`}><button className="btn btn-secondary mr-1">Cancel</button></Link>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </div>
        </div>
        </>
    );
}

export default EditDeck;