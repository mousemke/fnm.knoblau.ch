import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    contentWindow: {},
    seperator: {
      transition: "border-bottom 1s",

      "$contentWindow:hover &": {
        borderBottom: "1px solid rgb(36 210 235)"
      }
    }
  },
  {
    name: "Rules"
  }
);

export default useStyles;
