import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Puffs } from "@arwes/react-bgs";
import { Animator } from "@arwes/react-animator";
import StyledWindow from "../common/StyledWindow";
import EventsList from "../EventsList";
import PlayersList from "../PlayersList";
import DecksList from "../DecksList";
import SingleDeck from "../SingleDeck";
import SinglePlayer from "../SinglePlayer";
import SingleEvent from "../SingleEvent";

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
const setQueryParam = (param: string | null, slug: string | null = null) => {
  const { pathname } = window.location;

  const newQuery = param && slug ? `?type=${param}&slug=${slug}` : "";
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

  const data: Data = useMemo(
    () => ({
      decks,
      players,
      events
    }),
    [decks, players, events]
  );

  const setModal = useCallback(
    (
      modalType: string | null,
      slug: string | null,
      popstateEvent?: boolean
    ) => {
      setActiveDeck(null);
      setActivePlayer(null);
      setActiveEvent(null);

      switch (modalType) {
        case "deck":
          setActiveDeck(decks[slug as DeckId]);
          !popstateEvent && setQueryParam("deck", slug);
          break;
        case "player":
          setActivePlayer(players[slug as string]);
          !popstateEvent && setQueryParam("player", slug);
          break;
        case "event":
          setActiveEvent(events[slug as EventId]);
          !popstateEvent && setQueryParam("event", slug);
          break;
        default:
          !popstateEvent && setQueryParam(null, null);
      }

      setActiveModal(modalType);
    },
    [setActiveDeck, setActivePlayer, setActiveEvent]
  );

  const classes = useStyles();

  /**
   * catches the browser navigation event and sets the slug
   */
  const onNavigate = useCallback(
    (e: PopStateEvent) => {
      const type = e.state?.type;
      const slug = e.state?.slug;

      if (type && slug) {
        setModal(type, slug, true);
      } else {
        setModal(null, null, true);
      }
    },
    [setModal]
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

    onNavigate({ state: query } as PopStateEvent);

    window.addEventListener("popstate", onNavigate);

    return () => {
      window.removeEventListener("popstate", onNavigate);
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
          <DecksList setModal={setModal} data={data} />
          <PlayersList setModal={setModal} players={players} />
        </>
      )}
      {activeModal === "event" && (
        <SingleEvent data={data} setModal={setModal} activeEvent={activeEvent} />
      )}
      {activeModal === "deck" && (
        <SingleDeck data={data} setModal={setModal} activeDeck={activeDeck} />
      )}
      {activeModal === "player" && (
        <SinglePlayer
          data={data}
          setModal={setModal}
          activePlayer={activePlayer}
        />
      )}
    </>
  );
};

export default App;
