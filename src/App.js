import React, {Component, Fragment} from 'react'
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import {connect} from 'react-redux'
import {fetchPizzas} from './redux/actions'

class App extends Component {
  componentDidMount() {
    this.props.onPizzaFetch()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm />
        <PizzaList />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPizzaFetch: () => dispatch(fetchPizzas())
  }
}

export default connect(null, mapDispatchToProps)(App)
