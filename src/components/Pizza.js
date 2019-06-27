import React from "react"
import {connect} from 'react-redux'
import {changedPizzaToEdit} from '../redux/actions'

const Pizza = ({pizza, onPizzaEdit}) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => onPizzaEdit(pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onPizzaEdit: pizza => dispatch(changedPizzaToEdit(pizza))
  }
}

export default connect(null, mapDispatchToProps)(Pizza)
