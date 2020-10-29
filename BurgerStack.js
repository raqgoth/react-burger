import React from 'react'

const BurgerStack = props => (
  <div>
    <label htmlFor="burger-stack">stack this burger </label>
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      name="stack-burger"
    />
  </div>
)

const IngredientList = props => (
    <ul>
      {props.Ingredients.map(Ingredient => <li>{Ingredient}</li>)}
   </ul>
)
(IngredientList)

export default BurgerStack