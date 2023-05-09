import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    wrapperWindow: {
      width: "calc(80% - 100px)",
      marginLeft: "20%"
    }
  },
  {
    name: "PlayersList"
  }
);

export default useStyles;
