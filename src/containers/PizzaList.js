import React from 'react'
import Pizza from '../components/Pizza'
import {connect} from 'react-redux'

const PizzaList = ({pizzas}) => {
  let pizzaCards = pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza}/>)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaCards}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas
  }
}

export default connect(mapStateToProps)(PizzaList)
