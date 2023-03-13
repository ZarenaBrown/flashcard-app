import React, { useEffect, useState } from "react";


function StudyCard({ cards }) {
    const [index, setIndex] = useState(0);

    return (
        <StudyCardEntry card={cards[index]} onNext={() => setIndex(index + 1)} />
    );
}

function StudyCardEntry({ card, onNext}) {
    const [showBack, setShowBack] = useState(false);

    useEffect(() => {
        setShowBack(false);
    }, [card]);

    return (
        <div style={{ border: "1px solid black" }}>
            <div>{card.front}</div>
            {showBack ? (
                <>
                    <div>{card.back}</div>
                    <button onClick={() => onNext()}>Next</button>
                </>
            ) : (
                <button onClick={() => setShowBack(true)}>Flip</button>
            )}
        </div>
    );
}


export default StudyCard;