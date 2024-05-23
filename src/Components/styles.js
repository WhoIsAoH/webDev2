import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "2rem",
    width: "550px",
    padding: "0.3rem 1rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    columnGap: "0.5rem"
  },
  crypto: {
    color: "#bb8c00"
  },
  logo: {
    height: "50px",
    width: "50px"
  },
  select: {
    width: 100,
    height: 40,
    marginLeft: 15,
  },
  nav: {
    backgroundColor: "#011e43",
    padding: "0",
  },
  supply: {
    fontSize: "1.2rem",
    margin: "0.5rem 0rem",
    "& span": {
      color: "#00e7ff"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    }
  }
}));

export default useStyles;
