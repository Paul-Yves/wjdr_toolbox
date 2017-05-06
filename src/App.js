import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import logo from './wjdr_logo.png';
import './App.css';
import NameGenerator from './components/NameGenerator.js';
import TradeGenerator from './components/TradeGenerator.js';
import CriticalsDisplayer from './components/CriticalsDisplayer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="Warhammer jdr toolbox" />
            <h2>Welcome to Warhammer jdr toolbox</h2>
          </div>
          <div className="nav">
            <ul>
              <li><NavLink activeClassName="current" to="/" exact={true} >Random PNJ</NavLink></li>
              <li><NavLink activeClassName="current" to="/criticals">Critiques</NavLink></li>
              <li><NavLink activeClassName="current" to="/trade">Commerce</NavLink></li>
            </ul>
          </div>
          <Route exact path="/" component={NameGenerator}/>
          <Route exact path="/criticals" component={CriticalsDisplayer}/>
          <Route exact path="/trade" component={TradeGenerator}/>
        </div>
      </Router>
    );
  }
}

export default App;
