import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3
  }
});

const editor = {
    marginTop: 30,
    marginBot: 30,
    paddingTop: 30,
    paddingBottom: 30,
}
const preview = {
    marginBot: 30
}


const codeExample1 = `
const element = <h3>Hello, Bailey</h3> \n
render(element)`;

const codeExample2 =
`function fullName(name){
 let wholeName = name.first + ' ' + name.last;
 return wholeName;   
}

const name = {
    first: 'Michael',
    last: 'Scott'
};

function getGreeting(name) {
    if (name) {
        return <h2>Welcome to Dunder Mifflin, {fullName(name)}</h2>
    }
    return <h2>No Schrute Bucks for you!</h2>;
}

render(getGreeting(name));
`

const codeExample3 =
`
const element = (
    <div>
        <h4 style={{color: "pink"}}>Is mayonnaise an instrument?</h4>
        <h4 style={{color: "teal"}}>No, Patrick, mayonnaise is not an instrument.</h4>
    </div>
);

render(element);
`

function JSX(props) {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          What is JSX
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" align="center">
            JSX is a syntax extension to JavaScript. <br />
            It looks like regular markup, but has the full power of JavaScript
            behind it. <br />
            React doesn't require it, but it makes things a whole lot more
            readable.
          </Typography>
            <LiveProvider code={codeExample1} noInline>
              <LiveEditor style={editor}/>
              <LiveError />
              <LivePreview style={preview}/>
            </LiveProvider>
        </Paper>
      </Grid>
      <Grid item md={8}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" align="center">
            We can use JSX to embed JavaScript expressions in curly braces. <br />
            JSX expressions evaluate to regular JavaScript after compilation
          </Typography>
            <LiveProvider code={codeExample2} noInline>
              <LiveEditor style={editor}/>
              <LiveError />
              <LivePreview style={preview}/>
            </LiveProvider>
        </Paper>
      </Grid>
      <Grid item md={8}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" align="center">
            We can also use attributes in JSX, just like HTML! <br />
            However, JSX is a closer relative of JavaScript than HTML and uses camelCase for its attributes. <br />
            We can also nest elements within a JSX element!
          </Typography>
            <LiveProvider code={codeExample3} noInline>
              <LiveEditor style={editor}/>
              <LiveError />
              <LivePreview style={preview}/>
            </LiveProvider>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(JSX);
