import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Puffs } from '@arwes/react-bgs';
import { Animator } from '@arwes/react-animator';
import { FrameSVGUnderline } from '@arwes/react-frames';
import { Text } from '@arwes/react-text';

// import { decks } from "../data/decks";
// import { players } from "../data/players";
// import { events } from "../data/events";

// import Player from "../Player";
// import PlayersList from "../PlayersList";

// import Event from "../Event";
// import EventsList from "../EventsList";

import useStyles from "./App.styles";

// import type { Event } from "../events";
// import type { Player } from "../players";

/**
 *
 * @param param parameter to set in the query string
 * @param slug value to set in the query string
 */
const setQueryParam = (param: string, slug = "") => {
  const { pathname, search } = window.location;

  let newQuery: string;
  const paramRegex = new RegExp(`\\??\\&?${param}=[\\w\\d-]+`);
  const query = search.replace(paramRegex, "");

  if (query.length === 0) {
    newQuery = slug ? `?${param}=${slug}` : "";
  } else {
    newQuery = slug ? `${query}&${param}=${slug}` : query;
  }

  const newPath = `${pathname}${newQuery}`;

  if (param !== "r") {
    window.history.replaceState(null, document.title, newPath);
  } else {
    window.history.pushState({ slug }, document.title, newPath);
  }
};

/**
 * The main control app. Controls which view is visible as well as havig the states and setters
 */
const App = (): JSX.Element => {
  // const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  // const [multiplier, setMultiplier] = useState<number>(1);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const classes = useStyles();

  /**
   * controls going to a recipe and setting the browser history
   */
  const gotoRecipe = useCallback((slug: string) => {
    setQueryParam("r", slug);
    // setActiveRecipe(recipes[slug]);
  }, []);

  /**
   * catches the browser back event and sets the slug as the active recipe
   */
  // const onBack = useCallback(
  //   (e: PopStateEvent) => setActiveRecipe(e.state?.slug ? recipes[e.state?.slug] : null),
  //   []
  // );

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

    if (query.t) {
      setActiveTag(query.t);
    }

    if (query.f) {
      setFilter(query.f);
    }

    if (query.r) {
      // setActiveRecipe(recipes[query.r]);
    }

    // window.addEventListener("popstate", onBack);

    // return () => {
    //   window.removeEventListener("popstate", onBack);
    // };
  }, []);

  /**
   * initial tags
   */
  const tags = useMemo(() => {
    const newTags: string[] = [];

    // Object.values(recipes).forEach((r) =>
    //   r.tags.forEach((t) => {
    //     const tWords = t
    //       .split(" ")
    //       .map((w) => `${w[0].toUpperCase()}${w.slice(1)}`);
    //     newTags.push(tWords.join(" "));
    //   })
    // );

    return new Set<string>(newTags.sort());
  }, []);

  return (
    <div>
      <div className={classes.titleWindow}>
        <Text>
          <h2>Guerilla FNM with style</h2>
          <h3><b>fnm.knoblau.ch</b></h3>
        </Text>
        <FrameSVGUnderline className={classes.frame}/>
      </div>
      <Animator
        active
        duration={{interval: 2}}
      >
        <Puffs
          // color='hsla(180, 100%, 75%, 0.5)'
          color='hsl(300deg 83% 53%)'
          quantity={20}
        />
      </Animator>
      {/* {activeRecipe ? (
        <div
          className={classes.recipeCardWrapper}
          onClick={() => {
            setActiveRecipe(null);
            setQueryParam("r");
            setMultiplier(1);
          }}
        >
          <RecipeCard
            gotoRecipe={gotoRecipe}
            multiplier={multiplier}
            recipe={activeRecipe}
            setActiveRecipe={setActiveRecipe}
            setMultiplier={setMultiplier}
          />
        </div>
      ) : null}
      <div className={activeRecipe ? classes.hiddenList : undefined}>
        <RecipesList
          activeTag={activeTag}
          filter={filter}
          gotoRecipe={gotoRecipe}
          recipes={recipes}
          setActiveTag={setActiveTag}
          setFilter={setFilter}
          setQueryParam={setQueryParam}
          tags={tags}
        />
      </div>
        */}
    </div>
  );
};

export default App;
