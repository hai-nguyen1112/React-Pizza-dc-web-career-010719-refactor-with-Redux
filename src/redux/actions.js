function fetchPizzas() {
  return dispatch => {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => dispatch(fetchedPizzas(pizzas)))
  }
}

function fetchedPizzas(pizzas) {
  return {
    type: "PIZZAZ_WERE_FETCHED",
    payload: pizzas
  }
}

function changedPizzaToEdit(pizza) {
  return {
    type: "PIZZA_TO_EDIT_WAS_CHANGED",
    payload: pizza
  }
}

function editPizza(editData, id) {
  return dispatch => {
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(editData)
    }).then(res => res.json())
      .then(updatedPizza => dispatch(editedPizza(updatedPizza)))
  }
}

function editedPizza(updatedPizza) {
  return {
    type: "PIZZA_WAS_EDITED",
    payload: updatedPizza
  }
}

export {fetchPizzas, changedPizzaToEdit, editPizza}
