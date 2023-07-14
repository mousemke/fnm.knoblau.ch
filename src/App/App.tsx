import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Puffs } from "@arwes/react-bgs";
import { Animator } from "@arwes/react-animator";
import StyledWindow from "../common/StyledWindow";
import Nav from "../Nav";
import Rules from "../Rules";
import EventsList from "../EventsList";
import PlayersList from "../PlayersList";
import ArchetypeList from "../ArchetypeList";
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

  const slugQuery = slug ? `&slug=${slug}` : "";
  const newQuery = param ? `?type=${param}${slugQuery}` : "";
  const newPath = `${pathname}${newQuery}`;


  window.history.pushState({ type: param, slug }, document.title, newPath);
};

/**
 * checks the active modal prop and returns the correct component
 */
const getActivePage = (
  activeModal: string | null,
  setModal: (modalType: string | null, slug: string | null, popstateEvent?: boolean) => void,
  data: Data,
  activeEvent: EventObject | null,
  activeDeck: Deck | null,
  activePlayer: Player | null,
  activeArchetype: string | null
) => {
  switch (activeModal) {
    case "eventlist":
      return <EventsList setModal={setModal} events={events} />;
    case "archetypelist":
      return <ArchetypeList setModal={setModal} data={data} />;
    case "playerlist":
      return <PlayersList setModal={setModal} players={players} />;
    case "deckslist":
        return <DecksList data={data} setModal={setModal} activeArchetype={activeArchetype} />;
    case "event":
      <SingleEvent data={data} setModal={setModal} activeEvent={activeEvent} />;
    case "deck":
      <SingleDeck data={data} setModal={setModal} activeDeck={activeDeck} />;
    case "player":
      return (
        <SinglePlayer
          data={data}
          setModal={setModal}
          activePlayer={activePlayer}
        />
      );
    default:
      return <Rules />;
  }
}
/**
 * The main control app. Controls which view is visible as well as having the states and setters
 */
const App = (): JSX.Element => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeDeck, setActiveDeck] = useState<Deck | null>(null);
  const [activeArchetype, setActiveArchetype] = useState<string | null>(null);
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
      activeDeck !== null && setActiveDeck(null);
      activePlayer !== null && setActivePlayer(null);
      activeArchetype !== null && setActiveArchetype(null);
      activeEvent !== null && setActiveEvent(null);

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
        case "archetypelist":
        case "playerlist":
        case "eventlist":
          !popstateEvent && setQueryParam(modalType);
          break;
        case "deckslist":
          setActiveArchetype(slug);
          !popstateEvent && setQueryParam("deckslist", slug);
          break;
        default:
          !popstateEvent && setQueryParam(null, null);
      }

      setActiveModal(modalType);
    },
    [
      setActiveArchetype,
      setActiveDeck,
      setActivePlayer,
      setActiveEvent,
      activeDeck,
      activePlayer,
      activeArchetype,
      activeEvent
    ]
  );

  const classes = useStyles();

  /**
   * catches the browser navigation event and sets the slug
   */
  const onNavigate = useCallback(
    (e: PopStateEvent) => {
      const type = e.state?.type;
      const slug = e.state?.slug;

      if (type) {
        setModal(type, slug || null, true);
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

      <Animator active>
        <Nav setModal={setModal} />
      </Animator>
      {activeModal === null && (
        <Rules />
      )}
      {activeModal === "eventlist" && (
        <EventsList setModal={setModal} events={events} />
      )}
      {activeModal === "deckslist" && (
        <DecksList data={data} setModal={setModal} activeArchetype={activeArchetype} />
      )}
      {activeModal === "archetypelist" && (
        <ArchetypeList setModal={setModal} data={data} />
      )}
      {activeModal === "playerlist" && (
        <PlayersList setModal={setModal} players={players} />
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
      {/* {getActivePage(activeModal, setModal, data, activeEvent, activeDeck, activePlayer, activeArchetype)} */}
    </>
  );
};

export default App;
