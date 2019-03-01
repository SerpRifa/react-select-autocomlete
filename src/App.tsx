import React, { Component } from 'react';
import SelectAutocomplete from './SelectAutocomplete';
import {moneyList} from './Data/SelectList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>A teper'?</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >          
            Learn React
          </a>
          <div className="App-select"><SelectAutocomplete options={moneyList} /></div>
        </header>
      </div>
    );
  }
}

export default App;
