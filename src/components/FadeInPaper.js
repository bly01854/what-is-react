import React, { Component } from "react";
import { Grid, Fade, Paper } from "../../node_modules/@material-ui/core";

export default class FadeInPaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false
    };
  }

  handleChange = () => {
    this.setState({
      start: true
    });
  };
  render() {
    const { start } = this.state;
    return (
      <Grid item md={6} onMouseOver={this.handleChange}>
        <Fade in={start}>
          <Paper>{this.props.component}</Paper>
        </Fade>
      </Grid>
    );
  }
}
