import React from 'react';
import {chooseToppings} from '../actions/pizza'
import {toppings} from '../pizza.json'
import {connect} from 'react-redux'

class Toppings extends React.Component {

onChange = (event) => {
    if (this.props.toppings.length === 3 && ! this.props.toppings.includes(event.target.value)) {
        alert('Three toppings is enough, chubby')
    } else {
        this.props.dispatch(chooseToppings(event.target.value))
    }
}

render () {
    return (
        <div>
            Pick your favorite toppings:
            <form>
                <input onChange={this.onChange} type="checkbox" value={toppings[0].id} checked={this.props.toppings.includes("1")} /> {toppings[0].name}<br/>
                <input onChange={this.onChange} type="checkbox" value={toppings[1].id} checked={this.props.toppings.includes("2")} /> {toppings[1].name}<br/>
                <input onChange={this.onChange} type="checkbox" value={toppings[2].id} checked={this.props.toppings.includes("3")} /> {toppings[2].name}<br/>
                <input onChange={this.onChange} type="checkbox" value={toppings[3].id} checked={this.props.toppings.includes("4")} /> {toppings[3].name}<br/>
                <input onChange={this.onChange} type="checkbox" value={toppings[4].id} checked={this.props.toppings.includes("5")} /> {toppings[4].name}<br/>
                <input onChange={this.onChange} type="checkbox" value={toppings[5].id} checked={this.props.toppings.includes("6")} /> {toppings[5].name}<br/>
            </form>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        toppings: state.pizza.toppings
    }
} 

export default connect (mapStateToProps)(Toppings);
