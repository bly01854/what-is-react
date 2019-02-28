import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

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
class DoomsDayTimer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeLeft: 300
        }

        // Bind our methods
        this.handleClick = this.handleClick.bind(this)
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

    handleClick(){
        this.setState({
            timeLeft: this.state.timeLeft + 10
        });
    }

    render() {
        return (
            <div>
                <h3 style={{color: "red"}}>Time Until the End of the World: {this.state.timeLeft}</h3>
                <button onClick={this.handleClick}>DELAY DOOM</button>
            </div>
        )
    }
}

render(DoomsDayTimer);
`;

const codeExample2 =
`
class UnhostileTextMessageGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: ""
        }

        // Bind our methods
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(value){
        this.setState({
            message: this.state.message + value
        });
    }

    handleChange(event){
        this.setState({
            message: event.target.value
        })
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h4>Text Message:</h4>
                <input type="text" name="message" value={message} onChange={this.handleChange}/>
                <button value={this.props.laugh} onClick={this.handleClick.bind(this, this.props.laugh)}>Reduce hostility</button>
            </div>
        )
    }
}

render(<UnhostileTextMessageGenerator laugh="ha" />);
`

function Events(props) {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          How to Handle Events
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" align="center">
            Handling user events in React is very similar to how you would in HTML. <br />
            However, there are a few key exceptions: <br />
            <Typography variant="subtitle1" align="center">
            React events are camelCase
            </Typography>
            <Typography variant="subtitle1" align="center">
            You pass a function as the event handler, instead of a string <br />
            </Typography>
            In React, you usually define an event handler within the class definition: <br />
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
           So, what if we want to pass an argument to the handle function? 
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

export default withStyles(styles)(Events);
