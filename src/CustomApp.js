import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Box from 'grommet/components/Box';

import Home from './DemoScreens/Home';
import Login from './DemoScreens/Login';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class CustomApp extends Component {
  render() {
    return (
      <Box className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

         <Router>
            <Switch>
              <Route exact={true} path='/' component={ Login } />
              <Route path='/Home' component={ Home } />
              <Route path='/Login' component={ Login } />
            </Switch>
         </Router>

      </Box>
    );
  }
}

export default CustomApp;


// <Route path='/SignUp' component={SignUp} history={history} />
// <Route exact={true} path='/' render={() => <Login /> } />
// <Route path='/Home' render={() => <Home /> } />
// <Route path='/Login' render={() => <Login /> } />