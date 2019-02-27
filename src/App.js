import React, { Component } from 'react';
import IngredientsSearchContainer from './IngredientsSearchContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Pantry App
        <IngredientsSearchContainer />
      </div>
    );
  }
}

export default App;
