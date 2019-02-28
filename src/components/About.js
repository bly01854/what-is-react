import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import { Link } from "@material-ui/core"
import { GithubCircle } from "mdi-material-ui";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },
  icon: {
    fontSize: theme.typography.display4.fontSize,
    color: theme.palette.primary
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

function About(props) {
  const { classes } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={16}
    >
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          About
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6" align="center">
                This website was created with React to teach about React! <br />
                Created by Bailey Henson <br />
                Check out the source code: <br />
              </Typography>
              <Typography align="center">
                <Link
                  href="https://github.com/bly01854/what-is-react"
                  target="_blank"
                  rel="noopener"
                >
                  <GithubCircle className={classes.icon} color="secondary" />
                </Link>
              </Typography>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(About);
