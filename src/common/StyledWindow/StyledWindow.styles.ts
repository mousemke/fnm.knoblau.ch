import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    frame: {
      '& path[data-name="shape"]': {
        color: "rgba(45, 6, 36, 0.5)"
      },
      '& path[data-name="decoration"]': {
        color: "rgb(235 36 235)"
      }
    },
    wrapper: {
      margin: 50,
      padding: 20,
      position: "relative",
      marginTop: 30,

      // applies width to the text field
      "& > span > span, & > span": {
        width: "100%"
      }
    }
  },
  {
    name: "StyledWindow"
  }
);

export default useStyles;
