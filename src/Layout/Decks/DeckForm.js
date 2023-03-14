import React, { useState } from "react";
import { Link } from "react-router-dom";



function DeckForm({ formData, handleChange, handleSubmit }) {


    return (
    <form onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width:"100%"}}
        >
        <label htmlFor="name">Name</label>
            <input 
                id="name"
                name="name"
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                value={formData.name}
            />
        <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                value={formData.description}
                rows="4"
            />
    </form>
    );
}

export default DeckForm;