import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  ChevronLeft,
  Home,
  QuestionAnswer,
  Code,
  Info
} from "@material-ui/icons";
import {
  Puzzle,
  CodeBraces,
  GraveStone,
  GestureTap,
  ArrowRightBold,
  GithubCircle
} from "mdi-material-ui";
import MLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

import Main from "./Main";
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from "../../node_modules/@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Nav extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              What Is React
            </Typography>
            <MLink
              href="https://github.com/bly01854/what-is-react"
              target="_blank"
              rel="noopener"
            >
              <GithubCircle style={{ color: "white" }} />
            </MLink>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <List>
            <ListSubheader inset>Introduction</ListSubheader>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/why">
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Why React" />
            </ListItem>
            <Divider />
            <ListSubheader inset>Learn</ListSubheader>
            <ListItem button component={Link} to="/jsx">
              <ListItemIcon>
                <Code />
              </ListItemIcon>
              <ListItemText primary="JSX" />
            </ListItem>
            <ListItem button component={Link} to="/components">
              <ListItemIcon>
                <Puzzle />
              </ListItemIcon>
              <ListItemText primary="Components" />
            </ListItem>
            <ListItem button component={Link} to="/state">
              <ListItemIcon>
                <CodeBraces />
              </ListItemIcon>
              <ListItemText primary="State" />
            </ListItem>
            <ListItem button component={Link} to="/lifecycle">
              <ListItemIcon>
                <GraveStone />
              </ListItemIcon>
              <ListItemText primary="Lifecycle" />
            </ListItem>
            <ListItem button component={Link} to="/events">
              <ListItemIcon>
                <GestureTap />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
            <Divider />
            <ListSubheader inset>Extras</ListSubheader>
            <ListItem button component={Link} to="/next">
              <ListItemIcon>
                <ArrowRightBold />
              </ListItemIcon>
              <ListItemText primary="What's Next" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Main />
        </main>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
