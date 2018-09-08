import * as React from 'react'
//import {FormControl} from '@material-ui/core/FormControl';
import {bases, sauces, toppings, deliverytype} from '../pizza.json'

export default ({value: {base, sauce, topping1, topping2, topping3, delivery}, baseChange, sauceChange, toppingChange, deliveryChange}) => ( 
    <div>
      <label>
        Pick your favorite base:
        <select value={base} onChange={baseChange}>
          <option>{bases[0].name}, {bases[0].price}</option>
          <option>{bases[1].name}, {bases[1].price}</option>
          <option>{bases[2].name}, {bases[2].price}</option>
        </select>
      </label> <br></br>
      <label>
        Pick your favorite sauce:
        <select value={sauce} onChange={sauceChange}>
          <option type="radio">White sauce</option>
          <option>{sauces[0].name}</option>
          <option>{sauces[1].name} (+ {sauces[1].price} euro)</option>
          <option>{sauces[2].name} (+ {sauces[2].price} euro)</option>
        </select>
      </label> <br></br>
      <label>
        Pick your favorite toppings (max. 3, 0,50 each).<br></br>
        Topping 1:
        <select value={topping1} onChange={toppingChange}>
          <option>-</option>
          <option>{toppings[0].name}</option>
          <option>{toppings[1].name}</option>
          <option>{toppings[2].name}</option>
          <option>{toppings[3].name}</option>
          <option>{toppings[4].name}</option>
          <option>{toppings[5].name}</option>
        </select>
      </label> <br></br>
      <label>
        Topping 2:
        <select value={topping2} onChange={toppingChange}>
        <option>-</option>
          <option>{toppings[0].name}</option>
          <option>{toppings[1].name}</option>
          <option>{toppings[2].name}</option>
          <option>{toppings[3].name}</option>
          <option>{toppings[4].name}</option>
          <option>{toppings[5].name}</option>
        </select>
      </label> <br></br>
      <label>
        Topping 3:
        <select value={topping3} onChange={toppingChange}>
          <option>-</option>
          <option>{toppings[0].name}</option>
          <option>{toppings[1].name}</option>
          <option>{toppings[2].name}</option>
          <option>{toppings[3].name}</option>
          <option>{toppings[4].name}</option>
          <option>{toppings[5].name}</option>
        </select>
      </label> <br></br>
      <label>
       Delivery:
       <select value={delivery} onChange={deliveryChange}>
          <option>{deliverytype[0].name}</option>
          <option>{deliverytype[1].name} ({deliverytype[1].percentage}% extra costs)</option>
        </select>     
       </label>
    </div>
)