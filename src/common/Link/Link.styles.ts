import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    link: {
      color: "#fff",

      "&:hover": {
        color: "rgb(245 150 245)"
      },
      "&:active": {
        color: "rgb(170 104 170)"
      }
    }
  },
  {
    name: "Link"
  }
);

export default useStyles;
