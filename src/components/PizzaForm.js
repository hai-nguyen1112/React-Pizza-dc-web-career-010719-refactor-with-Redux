import React, {Component} from "react"
import {connect} from 'react-redux'
import {editPizza, changedPizzaToEdit} from '../redux/actions'
import {isEmpty} from 'lodash'

class PizzaForm extends Component {
  constructor() {
    super()
    this.state = {
      topping: "",
      size: "",
      vegetarian: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({topping: nextProps.pizzaToEdit.topping, size: nextProps.pizzaToEdit.size, vegetarian: nextProps.pizzaToEdit.vegetarian})
  }

  handleChange = e => {
    if (this.props.pizzaToEdit.id !== undefined) {
      e.target.name === "topping"
      ?
      this.setState({topping: e.target.value})
      :
      e.target.name === "size"
      ?
      this.setState({size: e.target.value})
      :
      this.setState({vegetarian: e.target.value === "Vegetarian" ? true : false})
    }
  }

  handleClickOfSubmit = e => {
    e.preventDefault()
    let editData = {}
    if (this.props.pizzaToEdit.id !== undefined) {
      if (this.props.pizzaToEdit.topping !== this.state.topping) {
        editData["topping"] = this.state.topping
      }
      if (this.props.pizzaToEdit.size !== this.state.size) {
        editData["size"] = this.state.size
      }
      if (this.props.pizzaToEdit.vegetarian !== this.state.vegetarian) {
        editData["vegetarian"] = this.state.vegetarian
      }
      if (!isEmpty(editData)) {
        this.props.onPizzaUpdate(editData, this.props.pizzaToEdit.id)
        this.props.onPizzaToEditChange({topping: "", size: "", vegetarian: null})
      }
    }
  }

  render() {
    return(
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            name="topping"
            className="form-control"
            placeholder="Pizza Topping"
            value={this.state.topping}
            onChange={this.handleChange}
          />
        </div>
        <div className="col">
          <select
            value={this.state.size}
            name="size"
            className="form-control"
            onChange={this.handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={this.state.vegetarian === true}
              onChange={this.handleChange}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={this.state.vegetarian === false}
              onChange={this.handleChange}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.handleClickOfSubmit}
          >
          Submit
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pizzaToEdit: state.pizzaToEdit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPizzaUpdate: (editData, id) => dispatch(editPizza(editData, id)),
    onPizzaToEditChange: pizza => dispatch(changedPizzaToEdit(pizza))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm)
