import React from 'react';
import {chooseSauce} from '../actions/pizza'
import {sauces} from '../pizza.json'
import {connect} from 'react-redux'

class Sauce extends React.Component {

onChange = (event) => {
        this.props.dispatch(chooseSauce(event.target.value))
      }

render () {
    return (
        <label>
        Pick your favorite sauce:
        <select value={this.props.sauce} onChange={this.onChange}>
            <option value='-1'>Choose sauce</option>
            {
                sauces.map(
                    s => <option key={s.id} value={s.id}>{s.name} {s.price > 0 ? `(${s.price} euro extra)` : ""}</option>
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

export default connect (mapStateToProps)(Sauce);