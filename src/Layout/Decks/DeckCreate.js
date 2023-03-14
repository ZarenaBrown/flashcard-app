import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { createDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";

/* Allows the user to create a new deck */

function DeckCreate() {
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const handleChangeName = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleChangeDescription = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateDeck();
    }

    const handleCreateDeck = async () => {
        const res = await createDeck({ name, description });
        setName("");
        setDescription("");
        history.push(`/decks/${res.id}`);
        window.location.reload();
    } 

    return (
        <>
            <Breadcrumb link={'/decks/new'} pageName={"Create Deck"} />
            <div style={{ marginLeft:"80px" }}>
                <h1>Create Deck</h1>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", width:"95%"}}
                    >
                    <label htmlFor="name">Name</label>
                        <input 
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Deck Name"
                            required={true}
                            onChange={handleChangeName}
                            value={name}
                        />
                    <label htmlFor="description" style={{marginTop: "10px"}}>Description</label>
                        <textarea
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Brief description of the deck"
                            required={true}
                            onChange={handleChangeDescription}
                            value={description}
                            rows="4"
                        />
                        <div style={{ marginTop: "20px"}}>
                            <Link to="/"><button className="btn btn-secondary mr-1" type="cancel">Cancel</button></Link>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                        
            </form>
            </div>
        </>
    );
}

export default DeckCreate;