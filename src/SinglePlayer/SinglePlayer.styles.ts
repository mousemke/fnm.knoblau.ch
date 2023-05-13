import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    paddedLine: {
      padding: 2
    },
    wrapperWindow: {
      width: "calc(80% - 100px)",
      marginLeft: "20%"
    }
  },
  {
    name: "SinglePlayer"
  }
);

export default useStyles;
