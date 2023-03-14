import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

    function DeleteDeckButton({deckId}) {
        const history = useHistory();

        const handleDelete = () => {
           if (window.confirm("Delete this deck? You will not be able to recover it.")) {
               deleteDeck(deckId)
               window.location.reload();
            }
        }
        return (
            <button type="button" className="btn btn-danger bi bi-trash" style={{ justifyContent:"space-around", marginRight: "5px" }} onClick={handleDelete}>Delete</button>
        )
    }

export default DeleteDeckButton;