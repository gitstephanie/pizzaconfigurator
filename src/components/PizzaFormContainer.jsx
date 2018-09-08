import React from 'react'
import {connect} from 'react-redux'
import {createPizza} from '../actions/pizza'
import PizzaForm from './PizzaForm'

class PizzaFormContainer extends React.Component {
  state = {
    base: '',
    sauce: '',
    toppings: [],
    turboDelivery: false,
    price: 0,
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      base: '',
      sauce: '',
      toppings: [],
      turboDelivery: false,
      price: 0
    })
    this.props.createPizza(this.state)
  }

  render() {
    return (
    <div>
    <PizzaForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      value={this.state}
      handleChange={this.onChange}
      handleInputChange={this.onChange}
    />
    <p>Total price:</p> 
    </div>
    )
  }
}

export default connect(null, {createPizza})(PizzaFormContainer)