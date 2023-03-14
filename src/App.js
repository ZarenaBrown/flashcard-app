import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Layout/Header";
import EditDeck from "./Layout/Decks/EditDeck";
import EditCard from "./Layout/Cards/EditCard";
import CreateCard from "./Layout/Cards/CreateCard";
import NotFound from "./Layout/NotFound";
import { listDecks } from "./utils/api";
import DeckList from "./Layout/Decks/DeckList";
import DeckCreate from "./Layout/Decks/DeckCreate";
import StudyPage from "./Layout/Decks/StudyDeck";
import StudyCard from "./Layout/Decks/StudyCard";
import Deck from "./Layout/Decks/Deck";


/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal)
    .then(setDecks)
  }, [])

  return (
    <div className="app-routes">
      <>
        <Header />
      </>
      <>
        <Switch>
        <Route exact path="/">
          <DeckList decks={decks}/>
        </Route>
        <Route path={"/decks/new"}>
          <DeckCreate />
        </Route>
        <Route path={"/decks/:deckId/cards/:cardId/edit"}>
          <EditCard />
        </Route>
        <Route path={"/decks/:deckId/cards/:cardId/study"}>
          <StudyCard />
        </Route>
        <Route path={"/decks/:deckId/cards/new"}>
          <CreateCard />
        </Route>
        <Route path={"/decks/:deckId/edit"}>
          <EditDeck />
        </Route>
        <Route path={"/decks/:deckId/study"}>
          <StudyPage />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck />
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
