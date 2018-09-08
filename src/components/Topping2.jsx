import React from 'react';
import {chooseTopping2} from '../actions/pizza'
import {toppings} from '../pizza.json'
import {connect} from 'react-redux'

class Topping2 extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        topping1: ''
    }
this.onChange = this.onChange.bind(this)
}

onChange = (event) => {
        this.props.dispatch(chooseTopping2(event.target.value))
      }

render () {
    return (
        <label>
        Pick your favorite topping 2:
        <select value={this.props.topping2} onChange={this.onChange}>
	    <option value='-1'>Choose topping2</option>
        <option value='0'>No topping</option>             
	    <option value={toppings[0].id}>{toppings[0].name}</option>
	    <option value={toppings[1].id}>{toppings[1].name}</option>
	    <option value={toppings[2].id}>{toppings[2].name}</option>
	    <option value={toppings[3].id}>{toppings[3].name}</option>
	    <option value={toppings[4].id}>{toppings[4].name}</option>
	    <option value={toppings[5].id}>{toppings[5].name}</option>
        </select>
      </label>
    )
}
}

const mapStateToProps = (state) => {
    return {
        state
    }
} 

export default connect (mapStateToProps)(Topping2);
