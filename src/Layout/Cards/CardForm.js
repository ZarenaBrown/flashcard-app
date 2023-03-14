import React, { useState } from "react";


function CardForm({ formData, handleChange, handleSubmit }) {

    return (
    <form onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", width:"100%"}}
    >
        <label htmlFor="label">Front</label>
        <textarea 
            id="front"
            name="front"
            className="form-control"
            placeholder="Front of card"
            required
            onChange={handleChange}
            value={formData.front}
            rows="2"
        />
        <label htmlFor="label">Back</label>
        <textarea 
            id="back"
            name="back"
            className="form-control"
            placeholder="Back of card"
            required
            onChange={handleChange}
            value={formData.back}
            rows="2"
        />
    </form>
    );
}

export default CardForm;