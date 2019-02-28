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
class Shy extends React.Component {
    constructor(props){
        super(props);

        this.state= {

        }
    }

    componentDidMount(){
        // Invoked immediately after a component is inserted
        // Good place to make API calls and subscriptions
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // Invoked immediately after an update. Not called initially
        // Another good place for network requests, as long as you compare props
    }

    componentWillUnmount(){
        // Invoked immediately before a component is unmounted and destroyed
        // Where you should do cleanup
    }

    render(){
        return <h3>Why are you looking at me?</h3>
    }
}
`;

const codeExample2 =
`
class DoomsDayTimer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeLeft: 300
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.countDown(),
            1000
        );
    }

    // Clean up
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    countDown() {
        this.setState({
            timeLeft: this.state.timeLeft - 1
        });
    }

    render() {
        return (
            <div>
                <h3 style={{color: "red"}}>Time Until the End of the World: {this.state.timeLeft}</h3>
            </div>
        )
    }
}

render(DoomsDayTimer);
`

function Lifecycle(props) {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          What is the Lifecycle
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" align="center">
            Each React Component has a set of methods called "LifeCycle Methods,"
            called through-out the lifetime of a component. <br />
            Here are the most basic ones:
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
           As mentioned above, LifeCycle methods are a great place to implement 
           subscriptions and changes of state. Perhaps we wanted a timer:
          </Typography>
            <LiveProvider code={codeExample2} noInline>
              <LiveEditor style={editor}/>
              <LiveError />
              <LivePreview style={preview}/>
            </LiveProvider>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Lifecycle);
