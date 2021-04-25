import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(3),
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "20%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Shamim Imtiaz" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Shamim Imtiaz"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h7">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
          ]}
          typeSpeed={30}
          backSpeed={40}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
