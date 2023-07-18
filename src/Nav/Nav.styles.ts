import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    frame: {
      "& path[data-name=bg]": {
        color: "rgba(45, 6, 36, 0.5)",
        filter: "drop-shadow(0 0 4px rgba(45, 6, 36, 0.5))"
      },
      "& path[data-name=line]": {
        transition: "color 1s",
        color: "rgb(235 36 235)",
        filter: "drop-shadow(0 0 4px rgb(235 36 235))"
      },
    },
    textWrapper: {
      padding: 10
    },
    wrapper: {
      position: "absolute",
      width: 150,
      margin: 50,
      padding: 20,
      marginTop: -3,

      "& p > span": {
        width: "100%"
      },

      "&:hover": {
        "& $frame path[data-name=line]": {
          color: "rgb(36 210 235)",
          filter: "drop-shadow(0 0 4px rgb(36 210 235))"
        }
      }
    }
  },
  {
    name: "Nav"
  }
);

export default useStyles;
