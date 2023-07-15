import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    inlinePaddedLine: {
      display: "inline-block",
      width: "45%",
      padding: 2
    },
    match: {
      margin: "16px 0 0",
    },
    paddedLine: {
      padding: 2
    },
    roundResult: {
      marginTop: "16px 0 8px",
      marginLeft: 35
    },
    roundResultPlayerName: {
      width: 250
    },
    roundResultWrapper: {
      marginTop: 20,
      marginLeft: 35
    },
    inlineAllChildren: {
      "& > h1, & > h3": {
        width: "45%",
        display: "inline-block"
      }
    }
  },
  {
    name: "SingleEvent"
  }
);

export default useStyles;
