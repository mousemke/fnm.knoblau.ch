import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        backgroundColor: "#141515",
        fontFamily: "monospace",
        width: "100vw",
        margin: 0,
        color: "#ddd"
      }
    },
    backgroundWrapper: {
      position: "fixed",
      width: "100%",
      height: "100%"
    },
    titleWindow: {
      width: 300,
      height: 100,
      marginBottom: 50,
      paddingBottom: 40
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
