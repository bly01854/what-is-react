import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },
  media: {
    height: 200,
    width: 300,
    maxWidth: "100%",
    maxHeight: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const editor = {
  marginTop: 30,
  marginBot: 30,
  paddingTop: 30,
  paddingBottom: 30
};
const preview = {
  marginBot: 30
};

function Next(props) {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={18}>
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          What's Next?
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia image={require("../static/Redux.png")} title="Redux" className={classes.media} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Redux
              </Typography>
              <Typography variant="subtitle1">
                Redux makes it easier to handle the state of your application as a whole. <br />
                It allows you to have one source of truth for your application, and reduces the complexity
                when you have to manage data all over your app. <br />
                The best part is that it plays very nicely with React!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={5}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia image={require("../static/router.png")} title="React-Router" className={classes.media} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                React Router
              </Typography>
              <Typography variant="subtitle1">
                React is wonderful as a single-page app library. However, things get more complex if you
                want to introduce routing. <br />
                React Router allows for multiple pages across multiple URLs, and greatly reduces the complexity. <br />
                You don't have to make any requests to the web server to request the next page, it's all handled
                client-side!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Next);
