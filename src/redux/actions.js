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

export {fetchPizzas}
