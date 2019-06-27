import {combineReducers} from 'redux'

const pizzasReducer = (oldState=[], action) => {
  let pizzas = [...oldState]
  switch (action.type) {
    case "PIZZAZ_WERE_FETCHED":
      pizzas = [...action.payload]
      return pizzas
    case "PIZZA_WAS_EDITED":
      return pizzas.map(pizza => {
        if (pizza.id === action.payload.id) {
          return action.payload
        } else {
          return pizza
        }
      })
    default:
      return oldState
  }
}

const pizzaToEditReducer = (oldState={}, action) => {
  switch (action.type) {
    case "PIZZA_TO_EDIT_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  pizzaToEdit: pizzaToEditReducer
})

export default rootReducer
