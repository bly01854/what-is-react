import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Typography, Divider, Link } from "@material-ui/core";
import { Npm } from "mdi-material-ui";
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live'

const styles = theme => ({
  text: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  }
});

const editor = {
    marginTop: 30,
    marginBot: 30,
    paddingTop: 30,
    paddingBottom: 30,
}

const codeText = "<button> Hi </button>"

class Simple extends Component {
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
            variant="display2"
            gutterBottom
          >
            Simple
            <Divider />
          </Typography>
          <Typography variant="subtitle1" align="center">
            React is very simple to learn, thanks to JSX and the component
            approach. <br />
            JSX is a mix of HTML and Javascript
          </Typography>
          <LiveProvider code={codeText} >
            <LiveEditor style={editor}/>
            <LiveError />
            <LivePreview style={editor} />
            </LiveProvider>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Simple);
