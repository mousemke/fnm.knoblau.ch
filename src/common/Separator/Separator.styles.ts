import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    separator: {
      height: 1,
      margin: "8px 10%",
      width: "80%",
      marginBottom: "1px solid rgb(235 36 235)"
    },
  },
  {
    name: "Seperator"
  }
);

export default useStyles;
