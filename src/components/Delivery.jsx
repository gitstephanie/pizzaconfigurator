import React from 'react';
import {chooseDelivery} from '../actions/pizza'
import {deliverytype} from '../pizza.json'
import {connect} from 'react-redux'


class Delivery extends React.Component {
    onChange = (event) => {
        this.props.dispatch(chooseDelivery(event.target.value))
     }

    render () {
        return (
            <label>
                Delivery:
                <select value={this.props.delivery} onChange={this.onChange}>
                    <option value='-1'>Choose deliverytype</option>
                    {
                        deliverytype.map(
                            d => <option key={d.id} value={d.id}>{d.name} {d.percentage > 0 ? `(${d.percentage} % extra)` : ""}</option>
                        )
                    }
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