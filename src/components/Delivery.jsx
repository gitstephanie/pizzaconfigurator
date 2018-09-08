import React from 'react';
import {chooseDelivery} from '../actions/pizza'
import {deliverytype} from '../pizza.json'
import {connect} from 'react-redux'


class Delivery extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        deliverytype: ''
    }
this.onChange = this.onChange.bind(this)
}

onChange = (event) => {
    this.props.dispatch(chooseDelivery(event.target.value))
     }


render () {
    return (
        <label>
        Delivery:
        <select value='delivery' onChange={this.onChange}>
            <option value='0'>Choose delivery</option>
            <option value={deliverytype[0].id}>{deliverytype[0].name}</option>
            <option value={deliverytype[1].id}>{deliverytype[1].name} ({deliverytype[1].percentage}% extra costs)</option>
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

export default connect (mapStateToProps)(Delivery);
