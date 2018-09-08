export const CREATE_PIZZA = 'CREATE_PIZZA'


export function createPizza(base, sauce, toppings, turboDelivery) {
  return {
    type: 'CREATE_PIZZA',
    payload: {
      base,
      sauce,
      toppings,
      turboDelivery
      }
    }
  }