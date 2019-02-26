import React from "react";
import { Grid } from "../../node_modules/@material-ui/core";
import FadeInPaper from "./FadeInPaper"

class Why extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
      <FadeInPaper />
      <FadeInPaper />
      <FadeInPaper />
      <FadeInPaper />
      </Grid>
    );
  }
}

export default Why;
