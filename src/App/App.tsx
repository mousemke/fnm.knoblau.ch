import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Puffs } from "@arwes/react-bgs";
import { Animator } from "@arwes/react-animator";
import StyledWindow from "../common/StyledWindow";
import EventsList from "../EventsList";
import PlayersList from "../PlayersList";
import DecksList from "../DecksList";
import SingleDeck from "../Deck";

import { decks } from "../data/decks";
import { players } from "../data/players";
import { events } from "../data/events";

import type { Data, Deck, DeckId, Player, EventId, EventObject } from "../data";

import useStyles from "./App.styles";

/**
 *
 * @param param parameter to set in the query string
 * @param slug value to set in the query string
 */
const setQueryParam = (param: string, slug = "") => {
  const { pathname } = window.location;

  const newQuery = slug ? `?type=${param}&slug=${slug}` : "";
  const newPath = `${pathname}${newQuery}`;

  window.history.pushState({ type: param, slug }, document.title, newPath);
};

/**
 * The main control app. Controls which view is visible as well as having the states and setters
 */
const App = (): JSX.Element => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeDeck, setActiveDeck] = useState<Deck | null>(null);
  const [activePlayer, setActivePlayer] = useState<Player | null>(null);
  const [activeEvent, setActiveEvent] = useState<EventObject | null>(null);

  const data: Data = useMemo(() => ({
    decks,
    players,
    events
  }), [decks, players, events]);

  console.log(data);

  const setModal = (modalType: string | null, deck: Deck | null, event: EventObject | null, player: Player | null) => {
    setActiveDeck(null);
    setActivePlayer(null);
    setActiveEvent(null);

    switch (modalType) {
      case "deck":
        setActiveDeck(deck);
        setQueryParam("deck", deck?.slug);
        break;
      case "player":
        setActivePlayer(player);
        setQueryParam("player", player?.slug);
        break;
      case "event":
        setActiveEvent(event);
        setQueryParam("event", event?.slug);
        break;
    }

    setActiveModal(modalType);
  }

  const classes = useStyles();

  /**
   * catches the browser back event and sets the slug as the active recipe
   */
  const onBack = useCallback(
    (e: PopStateEvent) =>
    {
      const type = e.state?.type;
      const slug = e.state?.slug;

      setModal(
        type || null,
        type === "deck" ? decks[slug] : null,
        type === "event" ? events[slug] : null,
        type === "player" ? players[slug] : null
      );
    },
    []
  );

  /**
   * on load, this takes query params, parses them, and sets appropriate states
   */
  useEffect(() => {
    const query: { [param: string]: string } = {};

    window.location.search
      .slice(1)
      .split("&")
      .forEach((q) => {
        const paramPair = q.split("=");
        const [key, value] = paramPair;
        query[key] = value;
      });

    const type = query?.type;
    const slug = query?.slug;

    setModal(
      type || null,
      type === "deck" ? decks[slug as DeckId] : null,
      type === "event" ? events[slug as EventId] : null,
      type === "player" ? players[slug] : null
    );

    window.addEventListener("popstate", onBack);

    return () => {
      window.removeEventListener("popstate", onBack);
    };
  }, []);

  return (
    <>
      <div className={classes.backgroundWrapper}>
        <Animator active duration={{ interval: 2 }}>
          <Puffs color="hsl(300deg 83% 53%)" quantity={20} />
        </Animator>
      </div>
      <StyledWindow className={classes.titleWindow}>
        <h2>Guerilla FNM with style</h2>
        <h3>
          <b>fnm.knoblau.ch</b>
        </h3>
      </StyledWindow>
      {activeModal === null && (
        <>
          <EventsList setModal={setModal} events={events} />
          <DecksList setModal={setModal} decks={decks} />
          <PlayersList setModal={setModal} players={players} />
        </>
      )}
      {activeModal === "event" && (
        <span>{JSON.stringify(activeEvent)}</span>
      )}
      {activeModal === "deck" && (
        <SingleDeck setModal={setModal} activeDeck={activeDeck}/>
      )}
      {activeModal === "player" && (
        <span>{JSON.stringify(activePlayer)}</span>
      )}
    </>
  );
};

export default App;
