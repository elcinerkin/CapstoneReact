import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Capstone Project application</h2>
        </div>
        <p className="App-intro">
          The page is the starter page for the Captsone project.
        </p>
      </div>
    );
  }
}

export default App;
