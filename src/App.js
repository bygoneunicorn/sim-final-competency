import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import Page from './components/Page';

import {Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route path={`/pages/:page`} component={Page}/>
          <Route path={`/`} component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
