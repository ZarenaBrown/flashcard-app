import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { readDeck, createCard } from "../../utils/api/index";

/* Allows the user to add a new card to an existing deck */

function CreateCard() {
    const { deckId } = useParams();
    const history = useHistory();

    const initialFormState = {
        front: "",
        back: "",
        deckId: deckId,
        id: 0,
    };

    const [deck, setDeck] = useState([]);
    const [formData, setFormData] = useState({...initialFormState});

    const handleChange = ({ target }) => {
        setFormData ({
            ...formData,
            [target.name]: target.value
        });
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
            cardCreate();
        }

        async function cardCreate() {
            try {
                await createCard(deckId, formData);
                setFormData({...initialFormState});
            } catch (error) {
                if(error.name!=="AbortError") {
                    throw error;
                }
            }
        }

    useEffect(() => {

        async function loadDeck() {

            const loadedDeck = await readDeck(deckId);
            setDeck(() => loadedDeck);
        }
        loadDeck();
    }, [deckId])



    return (
        <>
        <Breadcrumb link={`/decks/${deckId}`} linkName={deck.name} pageName={"Add Card"} />
        <div className="row" style={{marginLeft: "80px"}}>
            <h1>{deck.name}: Add Card</h1>
        </div>
        <div className="row" style={{ marginLeft: "80px"}}>
            <CardForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className="row" style={{ marginLeft: "80px", marginTop: "20px"}}>
            <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-1">Done</Link>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </div>
        </>
    );
}


export default CreateCard;