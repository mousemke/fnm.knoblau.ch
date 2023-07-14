import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    link: {
      cursor: "pointer",
      padding: "0 16px",
      textDecoration: "none",
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      color: "#fff",

      "&:hover": {
        backgroundColor: "rgba(235, 36, 235, 15%)",
        color: "rgb(245 150 245)"
      },
      "&:active": {
        backgroundColor: "rgba(36, 184, 235, 15%)",
        color: "rgb(170 104 170)"
      }
    }
  },
  {
    name: "RowLink"
  }
);

export default useStyles;
