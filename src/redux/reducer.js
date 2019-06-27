import {combineReducers} from 'redux'

const pizzasReducer = (oldState=[], action) => {
  switch (action.type) {
    case "PIZZAZ_WERE_FETCHED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  pizzas: pizzasReducer
})

export default rootReducer
