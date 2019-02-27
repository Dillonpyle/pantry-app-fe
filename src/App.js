import React, { Component } from 'react';
import IngredientsSearch from './IngredientsSearch'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Pantry App
        <IngredientsSearch />
      </div>
    );
  }
}

export default App;
