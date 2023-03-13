import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
import CreateDeck from "./Layout/Decks/CreateDeck";
import EditDeck from "./Layout/Decks/EditDeck";
import EditCard from "./Layout/Cards/EditCard";
import CreateCard from "./Layout/Cards/CreateCard";
import NotFound from "./Layout/NotFound";
import StudyCard from "./Layout/Cards/StudyCard";
import DeckView from "./Layout/Decks/DeckView";


/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  const [cards, setCards] = useState([]);
  const [decks, setDecks] = useState([]);

  const handleAdd = (data) => {
    setCards((prevCards) => [...prevCards, data]);
  };

  const handleAddDecks = (data) => {
    setDecks((prevDecks) => [...prevDecks, data]);
  }

  const handleEdit = (index, data) => {
    setCards((prevCards) => {
      const clonedCards = JSON.parse(JSON.stringify(prevCards));
      clonedCards[index] = data;
      return clonedCards;
    });
  };

  const handleEditDecks = (index, data) => {
    setDecks((prevDecks) => {
      const clonedDecks = JSON.parse(JSON.stringify(prevDecks));
      clonedDecks[index] = data;
      return clonedDecks;
    });
  }

  return (
    <div className="app-routes">
      <>
        <Header />
      </>
      <>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId/study">
          <StudyCard />
        </Route>
        <Route exact path="/decks/:deckId">
          <DeckView />
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <CreateCard />
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <Route>
          <NotFound />
        </Route>
        </Switch>
      </>
    </div>
  );
}

export default App;
