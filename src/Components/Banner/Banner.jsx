import { Box, Container, Typography } from "@material-ui/core";
import useStyles from "./style";

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.banner}>
        <Container>
          <div className={classes.mainTitle}>
            <Typography variant="" className={classes.main}>
              St Mary’s <span>Cryptos</span>
            </Typography>
            <Typography variant="h4" className={classes.color}>
              IT'S GOLD FOR NERDS
            </Typography>
            <Typography variant="h6" className={classes.color}>
              Bitcoin is only risky to those who don't understand it
            </Typography>
          </div>
        </Container>
      </Box>
    </>
  );
};
export default Banner;
