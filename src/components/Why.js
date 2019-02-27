import React, { Component } from "react";
import {
  Grid,
  Typography,
  Divider,
  Icon,
  withStyles
} from "../../node_modules/@material-ui/core";
import { Npm } from "mdi-material-ui";
import FadeInPaper from "./FadeInPaper";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Community from './Why/Community';

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
