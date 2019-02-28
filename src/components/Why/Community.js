import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Typography, Divider, Link } from "@material-ui/core";
import { Npm } from "mdi-material-ui";

const styles = theme => ({
  icon: {
    fontSize: theme.typography.display4.fontSize,
    color: theme.palette.primary
  },
  text: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  }
});

class Community extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            color="textPrimary"
            align="center"
            variant="h3"
            gutterBottom
          >
            Awesome Community
            <Divider />
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" md={10} align="center">
            Anyone can create and publish their own components and component
            libraries.
          </Typography>
          <Grid item>
            <Typography variant="subtitle1" align="center" 
            className={classes.text}>
              The React Community boasts about its millions of developers who
              have contributed thousands of well-tested components - leading to
              shorter development time.
            </Typography>
          </Grid>
          <Typography align="center">
            <Link
              href="https://www.npmjs.com/search?q=keywords:react"
              target="_blank"
              rel="noopener"
            >
              <Npm className={classes.icon} color="secondary" />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Community);
