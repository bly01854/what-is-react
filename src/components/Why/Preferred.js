import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Grid,
  Typography,
  Divider,
  Link,
  AppBar,
  Tabs
} from "@material-ui/core";
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

class Preferred extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: 1
    }

    handleChange = () => {

    }
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Most Loved" />
            <Tab label="Most Wanted" />
          </Tabs>
        </AppBar>
      </Grid>
    );
  }
}

export default withStyles(styles)(Preferred);
