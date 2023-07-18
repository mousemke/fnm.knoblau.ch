import React from "react";
import ContentWindow from "../common/ContentWindow";
import Separator from "../common/Separator";
import Link from "../common/Link";
import useStyles from "./Rules.styles";

/**
 * The list of all events
 */
const Rules = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <ContentWindow>
        <div>4 players minimum. Otherwise it's just playing magic and drinking.</div>
        <Separator />
        <div>For more info on joining Berlin's premier guerilla FNM, please <Link href="https://discord.gg/CrBz7X7HUD">check out our discord</Link></div>
      </ContentWindow>
      <ContentWindow>
        <h2>Rules</h2>
        <h3>1. Drink.</h3>
        <div>
          It doesn't need to be alcohol but we didn't ask permission to be hosted here. Be respectful; be a paying customer
        </div>
        <Separator />
        <h3>2. This is unsustainable.</h3>
        <div>
          The "cost" of the FNM is drinking here and supporting the bar. Given that, so far I've paid for our prizes today. I accept donations to help reimburse this cost.
        </div>
        <Separator />
        <h3>3. You need a decklist.</h3>
        <div>
          Your decklist needs to be submitted digitally to <Link href="mailto:fnm@knoblau.ch">fnm@knoblau.ch</Link> by Friday at 18:00. It must include your name, your deckname, your deck archetype, your MB cards, and your SB cards. Please try to keep your listed archetypes typical so we can sort them with the data.
        </div>
        <br />
        <div>
        Submitting your decklist is also considered an RSVP.
        </div>
        <Separator />
        <h3>4. For now, there is no Judge.</h3>
        <div>
          I volunteer to solve any rules questions, if it involves me then me and the other party involved will find another that we mutually trust for a ruling.
        </div>
        <Separator />
        <h3>5. We will have a "competition" level rules enforcement.</h3>
        <div>
          If you miss a trigger, you missed it. No takesy-backsies. This will do nothing but improve the general skill level of all involved.
        </div>
        <Separator />
        <h3>6. We will have 50 min rounds.</h3>
        <div>
          Round times will be enforced, after time runs out the current game gets 5 more turns.
        </div>
      </ContentWindow>
    </>
  );
};

export default Rules;
