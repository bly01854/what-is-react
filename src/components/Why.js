import React, { Component } from "react";
import {
  Grid,
  Typography,
  Divider,
  Icon
} from "../../node_modules/@material-ui/core";
import { Npm } from 'mdi-material-ui'
import FadeInPaper from "./FadeInPaper";

const Community = () => {
  return (
    <Grid container direction="row" justify="center" alignContent="center" alignItems="center">
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
        <Icon>

        </Icon>
      </Grid>
    </Grid>
  );
};

class Why extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <FadeInPaper component={<Community />} />
        <FadeInPaper />
        <FadeInPaper />
        <FadeInPaper />
      </Grid>
    );
  }
}

export default Why;
