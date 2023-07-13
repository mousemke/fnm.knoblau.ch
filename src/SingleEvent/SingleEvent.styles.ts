import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    inlinePaddedLine: {
      display: "inline-block",
      width: "45%",
      padding: 2
    },
    match: {
      margin: "8px 0 0",
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
      marginTop: "16px",
      marginLeft: 35
    },
    wrapperWindow: {
      width: "calc(80% - 100px)",
      marginLeft: "20%"
    }
  },
  {
    name: "SingleEvent"
  }
);

export default useStyles;
