import React from 'react'
import {connect} from 'react-redux'
import Base from './Base'
import Sauce from './Sauce'
import Toppings from './Toppings'
import Delivery from './Delivery'
import TotalPrice from './TotalPrice'


class PizzaContainer extends React.Component {
  render() {
  return (
    <div>
      <Base/>
      <Sauce/>
      <Toppings/>
      <Delivery/>
      <TotalPrice pizza={this.props}/>
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    base: state.pizza.base,
    sauce: state.pizza.sauce,
    toppings: state.pizza.toppings,
    delivery: state.pizza.delivery
  }
}

export default connect(mapStateToProps)(PizzaContainer)