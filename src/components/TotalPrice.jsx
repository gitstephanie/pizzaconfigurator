import * as React from 'react'
import {bases, sauces, toppings, deliverytype} from '../pizza.json'

export default function totalPrice(props){
    const pizza = props.pizza
    console.log(pizza);
    if (pizza.base || pizza.sauce || pizza.topping1 || pizza.topping2 || pizza.topping3) {
        let tp = 0
        tp += bases[pizza.base-1] ? bases[pizza.base-1].price : 0
        tp += sauces[pizza.sauce-1] ? sauces[pizza.sauce-1].price : 0
        tp += pizza.topping1 > 0 ? 0.5 : 0
        tp += pizza.topping2 > 0 ? 0.5 : 0
        tp += pizza.topping3 > 0 ? 0.5 : 0
        tp += pizza.delivery > 1 ? tp*0.1 : 0
        return <p>Total price is: {tp}</p>
    } else {return (<p>Total price is: 0</p>)}
} 

