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
// Using function declaration
function Cool(props){
    return <h3>You're the coolest {props.name}</h3>
} 

// Using ES6 Classes
class NotCool extends React.Component {
    render(){
        return <h3>You're not so cool, {this.props.name}</h3>
    }
}
`;

const codeExample2 =
`
function Cool(props){
    return <h3>You're the coolest, {props.name}</h3>
} 

class NotCool extends React.Component {
    render(){
        return <h3>You're not so cool, {this.props.name}</h3>
    }
}

// All Composed components must be nested witin one element
function CoolTown(props) {
    return (
        <div>
            <Cool name="Bailey" />
            <NotCool name="Peter" />
        </div>
    )
}

render(<CoolTown />)
`

function Components(props) {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          What are Components
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" align="center">
            Components are the core of React. <br />
            They let you split up the UI into smaller pieces, making for much more
            readable code.<br />
            Components are similar to JavaScript functions. They take in 
            something called "props" and return elements for the view. <br />
            There are multiple ways to define a component; here are two:
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
            Elements defined earlier only contained HTML tags, but what's cool
            with React, is that can throw in our own component! <br />
            Not only that, we can nest components within components!
          </Typography>
            <LiveProvider code={codeExample2} noInline>
              <LiveEditor style={editor}/>
              <LiveError />
              <LivePreview style={preview}/>
            </LiveProvider>
            <Typography variant="h6" align="center">
            You can name props whatever you want, but it's best if you name it
            something that pertains to what it intends to accomplish. <br />
            Props are also read-only, and should not be manipulated by its own class.
            They should only be passed down.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Components);
