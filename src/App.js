import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Mahesh Biller"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Paper zDepth={3} style="text-align:left;">
              <div>
                <TextField
                  hintText="Hint Text" className="pull-left"
                />
              </div>
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
