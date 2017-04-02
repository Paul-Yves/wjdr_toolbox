import React, { Component } from 'react';
import logo from './wjdr_logo.png';
import './App.css';
import NameGenerator from './components/NameGenerator.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Warhammer jdr toolbox" />
          <h2>Welcome to Warhammer jdr toolbox</h2>
        </div>
        <NameGenerator/>
      </div>
    );
  }
}

export default App;
