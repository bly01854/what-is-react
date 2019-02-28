import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Nav from './components/Nav';
import Main from './components/Main';
import 'typeface-roboto';


const palette = {
  primary: { main: '#00796B' },
  secondary: { main: '#EF9A9A' }
}

const typography = {
  useNextVariants: true
}

const themeName = 'Base theme';
const theme = createMuiTheme({palette, typography, themeName});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Nav />
      </MuiThemeProvider>
    );
  }
}

export default App;
