import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Grid, Typography, Divider } from "@material-ui/core";
import { Npm } from 'mdi-material-ui';

const styles = theme => ({
  icon: {
    fontSize: theme.typography.display4.fontSize,
    color: theme.palette.primary
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
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography align="center" variant="display3" gutterBottom>
            Awesome Community
            <Divider />
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" md={10} align="center">
            Anyone can create and publish their own components and component
            libraries.
          </Typography>
          <Typography align="center">
            <Npm className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Community);
