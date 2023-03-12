import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
import CreateDeck from "./Layout/Decks/CreateDeck";
import Decks from "./Layout/Decks/Deck";
import EditDeck from "./Layout/Decks/EditDeck";
import EditCard from "./Layout/Cards/EditCard";
import CreateCard from "./Layout/Cards/CreateCard";
import NotFound from "./Layout/NotFound";
import StudyCard from "./Layout/Cards/StudyCard";


/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {

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
          <Decks />
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
