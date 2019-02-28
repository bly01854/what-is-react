import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import {
  CardContent,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import SubExpansion from "./SubExpansion";

const styles = theme => ({
  card: {},
  media: {
    height: 400,
    maxWidth: 450,
    marginLeft: "auto",
    marginRight: "auto"
  },
  paper: {
    marginTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const componentContent = `Everything is built from compact and isolated pieces of code
called "components." The magic of React lies in components, 
making your code highly reusable. Think of them as your custom
HTML elements packed with javascript functionality!`;

const vDomContent = `The DOM API (i.e. selecting specific elements) can
be very tedious and cumbersome. React gives you a virtual browser to play with
that is much easier to use. The virtual browser is like the middle man between
the real deal and the developer.`;

const reactiveUpdatesContent = `It's in the name. Whenever a component 
changes, so does the User Interface it represents - automatically. Usually, 
we would need to manually refresh the HTML views in the DOM (Doucment Object Model).
React, however, will "react" and do
it for us!`;

function Home(props) {
  const { classes } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item md={10}>
        <Typography variant="h2" align="center" color="secondary">
          What is React?
        </Typography>
      </Grid>
      <Grid item md={8} sm={8}>
        <Card className={classes.paper}>
          <CardMedia
            image={require("../static/react.png")}
            title="React"
            className={classes.media}
          />
          <CardContent>
            <ExpansionPanel className={classes.paper}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography gutterBottom variant="subheading">
                  React is a Javascript library that allows you to build
                  elaborate user interfaces.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <SubExpansion title="Components" content={componentContent} />
                <SubExpansion
                  title="Reactive"
                  content={reactiveUpdatesContent}
                />
                <SubExpansion title="Virtual DOM" content={vDomContent} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
