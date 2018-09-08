import * as React from 'react'
//import {bases, sauces, toppings} from '../pizza.json'

export default ({value: {base, sauce, topping, turboDelivery}, handleChange, handleInputChange}) => ( 
    <div>
    <form onSubmit={this.handleSubmit}>
      <label>
        Pick your favorite base:
        <select value={base} onChange={handleChange}>
          <option>25cm</option>
          <option>30cm</option>
          <option>35cm</option>
        </select>
      </label> 
      <input type="submit" value="Submit" /><br></br>
      <label>
        Pick your favorite sauce:
        <select value={sauce} onChange={handleChange}>
          <option>White</option>
          <option>Red</option>
          <option>Mix</option>
        </select>
      </label>
      <input type="submit" value="Submit" /><br></br>
      <label>
        Pick your favorite toppings (max. 3):
        <select value={topping} onChange={handleChange}>
          <option>Pineapple</option>
          <option>Kaas</option>
        </select>
      </label>
      <input type="submit" value="Submit" /><br></br>
      <label>
       Turbo drone delivery (10% extra costs):
       <input
         name="turboDelivery"
         type="checkbox"
         value={turboDelivery}
         checked={turboDelivery}
         onChange={handleInputChange} />
     </label>
     </form>
    </div>
  )