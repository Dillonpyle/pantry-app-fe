import React, { Component } from 'react';
import IngredientsContainer from './IngredientsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Pantry App
        <IngredientsContainer />
      </div>
    );
  }
}

export default App;
