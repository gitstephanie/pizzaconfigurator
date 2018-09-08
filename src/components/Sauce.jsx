import React from 'react';
import {chooseSauce} from '../actions/pizza'
import {sauces} from '../pizza.json'
import {connect} from 'react-redux'

class Sauce extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        sauce: ''
    }
this.onChange = this.onChange.bind(this)
}

onChange = (event) => {
        this.props.dispatch(chooseSauce(event.target.value))
      }

render () {
    return (
        <label>
        Pick your favorite sauce:
        <select value='sauce' onChange={this.onChange}>
          <option type="radio">White sauce</option>
          <option>{sauces[0].name}</option>
          <option>{sauces[1].name} (+ {sauces[1].price} euro)</option>
          <option>{sauces[2].name} (+ {sauces[2].price} euro)</option>
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

export default connect (mapStateToProps)(Sauce);