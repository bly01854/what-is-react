import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Typography, Divider, Link } from "@material-ui/core";
import { FacebookBox } from "mdi-material-ui";

const styles = theme => ({
  icon: {
    fontSize: theme.typography.display3.fontSize,
  },
  text: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  component: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5
  }
});

class Scale extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const facebookComponents = "\t > 50,000 components"
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
            variant="display2"
            gutterBottom
          >
            Immense Scalability
            <Divider />
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" md={10} align="center">
            The modular nature of React allows for sustainable growth of an
            application.
          </Typography>
          <Grid container alignContent="center" alignItems="center"
          className={classes.component}>
          <span>&nbsp;&nbsp;&nbsp;</span>
            <FacebookBox className={classes.icon} color="secondary" />
            <Typography variant="display2">
            <span>&nbsp;</span>{facebookComponents}
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant="subtitle1" align="center">
            ... and still grows without any performance problems.
          </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Scale);
