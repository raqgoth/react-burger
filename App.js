import React, { Component } from 'react';
import './App.css';
import BurgerPane from './components/BurgerPane'
import IngredientList from './components/IngredientList'

class App extends Component {
  render() {
    return (
      <div>
        <IngredientList ingredient={IngredientList}/>
        <BurgerPane />
      </div>
    )
  }
}

export default App
