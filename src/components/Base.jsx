import React from 'react';
import {chooseBase} from '../actions/pizza'
import {bases} from '../pizza.json'
import {connect} from 'react-redux'

class Base extends React.Component {

    onChange = (event) => {
        this.props.dispatch(chooseBase(event.target.value))
    }


    render () {
        return (
            <label> Pick your favorite base:
                <select value={this.props.base} onChange={this.onChange}>
                    <option value='-1'>Choose base</option>
                    {
                        bases.map(
                            b => <option key={b.id} value={b.id}>{b.name}, {b.price}</option>
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

export default connect (mapStateToProps)(Base);