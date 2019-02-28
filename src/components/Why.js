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
import Community from "./Why/Community";
import Scale from "./Why/Scale";
import Preferred from "./Why/Preferred";

class Why extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={24}
        direction="row"
      >
      <Grid item md={12}>
        <Typography variant="display4" align="center" color="secondary">
            Why React?
        </Typography>
      </Grid>
        <FadeInPaper component={<Community />} />
        <FadeInPaper component={<Scale />} />
        <FadeInPaper component={<Preferred />} />
        <FadeInPaper component={<Preferred />} />
      </Grid>
    );
  }
}

export default Why;
