import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Grid,
  Typography,
  Divider,
  Link,
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core";
import { Npm } from "mdi-material-ui";
import Loved from "./charts/Loved";
import Wanted from "./charts/Wanted";

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
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({
      value
    })
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
          <Typography
          color="textPrimary"
          align="center"
          variant="display2"
          gutterBottom
        >
          Preferred
          <Divider />
        </Typography>
        <Typography align="center"
        variant="h6"
        gutterBottom
        color="textSecondary">
          From Stack Overflow's Developer Survey 2018
        </Typography>
        {value === 0 && <Loved />}
        {value === 1 && <Wanted />}
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
