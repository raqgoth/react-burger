import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

import Ingredient from './Ingredient'

// function addIngredient(props) {//this is a component
//     return (
//       <button onClick={props.onClick}>
//         Add
//       </button>
//     );
//   }
//   addIngredient()

class BurgerPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredientsToDisplay: props.Ingredients,
      stackValue: '',
      addIngredient: true
    }
   
  }


handleStackChange = event => {
    const stackValue = event.target.value
    this.setState((prevState, props) => {
      const stackedBurger = props.Ingredients.filter(Ingredient => {
        if (Ingredient.toLowerCase().includes(stackValue.toLowerCase())) {
          return Ingredient
        }
      })
      
      return {
        stackValue: stackValue,
        ingredientsToDisplay: stackedBurger
      }
    })
  }

render() {
    return (
        <div>
          <BurgerStack    
            value={this.state.stackValue}
            onChange={this.handleStackChange}
            Ingredients={this.state.ingredientsToDisplay}
          />
          <IngredientList Ingredient={this.state.ingredientsToDisplay} />
        </div>
            )
} 
}




export default BurgerPane