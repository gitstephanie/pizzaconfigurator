import React from 'react'
import {connect} from 'react-redux'
import Base from './Base'
import Sauce from './Sauce'
import Topping1 from './Topping1'
import Topping2 from './Topping2'
import Topping3 from './Topping3'
import Delivery from './Delivery'



class PizzaContainer extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        base: '',
        sauce: '',
        topping: '', 
        deliveryType: '',
        price: 0,
    }
  }

  render() {
    console.log(`Base: ${this.state.base}`)
    console.log(`Sauce: ${this.state.sauce}`)
    console.log(`Topping: ${this.state.topping}`)
    console.log(`Delivery: ${this.state.deliverytype}`)
    return (
    <div>
      <Base/>
      <Sauce/>
      <Topping1/>
      <Topping2	/>
      <Topping3/>
      <Delivery/>
    <p>Total price:</p> 
    </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state.props)
  return {
    base: state.base,
    sauce: state.sauce,
    topping: state.topping,
    delivery: state.delivery
  }
}

export default connect(mapStateToProps)(PizzaContainer)
