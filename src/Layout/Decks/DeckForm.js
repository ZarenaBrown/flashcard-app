import React from "react";


function DeckForm({ handleChange, handleSubmit, deck }) {

    const deck = { 
        id: "",
        name: "",
        description: "",
    };

    const [formData, setFormData] = useState({ ...deck });

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createDeck(formData);
        setFormData({ ...deck });
    };

    return (
        // <Breadcrumb CreateDeck={CreateDeck} isCreating={true} />
    <>
        <div>
            <h1>Create Deck</h1>
            <div><label htmlFor="name">Name</label></div>
            <input 
                id="name"
                name="name"
                type="text"
                placeholder="Deck Name"
                required={true}
                onChange={handleChange}
                value={formData.name}
            />
        </div>
        <div>
            <div><label htmlFor="description">Description</label></div>
            <textarea
                id="description"
                name="description"
                type="text"
                placeholder="Brief description of the deck"
                required={true}
                onChange={handleChange}
                value={formData.description}
            />
        </div>
        <div>
            <Link to="/"><button type="cancel">Cancel</button></Link>
            <Link to="/decks/:deckId"><button type="submit">Submit</button></Link>
        </div>
    </>
    );
}

export default CardForm;