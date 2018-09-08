import React from 'react';
import {chooseBase} from '../actions/pizza'
import {bases} from '../pizza.json'
import {connect} from 'react-redux'

class Base extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        base: ''
    }
this.onChange = this.onChange.bind(this)
}

onChange = (event) => {
     this.props.dispatch(chooseBase(event.target.value))
      }

render () {
   return (
        <label> Pick your favorite base:
        <select value='base' onChange={this.onChange}>
          <option>{bases[0].name}, {bases[0].price}</option>
          <option>{bases[1].name}, {bases[1].price}</option>
          <option>{bases[2].name}, {bases[2].price}</option>
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

export default connect (mapStateToProps)(Base);