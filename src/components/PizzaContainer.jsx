import React from 'react'
import {connect} from 'react-redux'
import Base from './Base'
import Sauce from './Sauce'
import Topping1 from './Topping1'
import Topping2 from './Topping2'
import Topping3 from './Topping3'
import Delivery from './Delivery'
import TotalPrice from './TotalPrice'

class PizzaContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       base: '',
       sauce: '',
       topping1: '',
       topping2: '',
       topping3: '',
       droneDelivery: false,
       readyToOrder: false
    }
  }
  render() {
    //console.log(`Base: ${this.props.base}`)
    //console.log(`Sauce: ${this.props.sauce}`)
    //console.log(`Topping: ${this.props.topping}`)
    //console.log(`Delivery: ${this.props.deliverytype}`)
    return (
      <div>
        <Base/>
        <Sauce/>
        <Topping1/>
        <Topping2/>
        <Topping3/>
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
    topping1: state.pizza.topping1,
    topping2: state.pizza.topping2,
    topping3: state.pizza.topping3,
    delivery: state.pizza.delivery
  }
}

export default connect(mapStateToProps)(PizzaContainer)
