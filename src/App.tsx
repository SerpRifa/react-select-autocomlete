import React, { Component } from 'react';
import SelectAutocomplete from './SelectAutocomplete';
import {moneyList} from './Data/SelectList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App grid" >
        <div className="grid-item header"></div>
        <div className="grid-item main">
          <div className="App-select grid-autoselect">            
            <div className="empty"></div>
            <div className="autoselect"><SelectAutocomplete options={moneyList} /></div>             
            <div className="empty"></div>                       
          </div>        
        </div>
        <div className="grid-item nav"></div>
        <div className="grid-item aside"></div>
        <div className="grid-item footer"></div>      
      </div>
    );
  }
}

export default App;
