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
  paddingBottom: 30
};
const preview = {
  marginBot: 30
};

const codeExample1 = `
class CoolTownMayor extends React.Component {
    // We need a constructor to assign initial state
    constructor(props){
        super(props);
        this.state = {
            mayor: "Bailey",
            backgroundColor: "green"
        };
    }

    render(){
        return (
            <div style={{backgroundColor: this.state.backgroundColor}}>
                <h4>No I, {this.state.mayor}, am mayor of Cool Town</h4>
            </div>
        )
    }
}

render(<CoolTownMayor />)
`;

const setStateText = 
`
this.setState({greeting: "Hello"})
`

function State(props) {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          What is State
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h6" align="center">
            State is similar to props, in that it is some variable the component
            uses. <br />
            However, it varies greatly in how the component can use it.
            <br />
            State is privately owned and the component has full access to it.
          </Typography>
          <LiveProvider code={codeExample1} noInline>
            <LiveEditor style={editor} />
            <LiveError />
            <LivePreview style={preview} />
          </LiveProvider>
          <Typography variant="h6" align="center">
           However, there are some rules when it comes to state. <br />
           You must never modify it directly, as this hinders intended functionality
           of how React works. <br />
           So, instead of <code>this.state.greeting = 'Hi'</code>, use 
           <code>{setStateText}</code> instead. <br />
           React will then automatically update the state for you. <br />
           You can also update only what you need in state, so you don't have to 
           worry about messing up the state of another variable.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(State);
