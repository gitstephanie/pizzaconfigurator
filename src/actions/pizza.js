export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CHOOSE_SAUCE = 'CHOOSE_SAUCE'
export const CHOOSE_TOPPINGS = 'CHOOSE_TOPPINGS'
export const CHOOSE_DELIVERY = 'CHOOSE_DELIVERY'

export const chooseBase = (base) => {
  console.log(`Base in actions ${base}`)
  return {
    type: 'CHOOSE_BASE',
    payload: base
  }
}

export const chooseSauce = (sauce) => {
  console.log(`Sauce in actions ${sauce}`)
  return {
    type: 'CHOOSE_SAUCE',
    payload: sauce
  }
}

export const chooseToppings = (topping) => {
  console.log(`toppings in actions ${topping}`)
  return {
    type: 'CHOOSE_TOPPINGS',
    payload: topping
  }
}

export const chooseDelivery = (delivery) => {
  console.log(`delivery in actions ${delivery}`)
  return {
    type: 'CHOOSE_DELIVERY',
    payload: delivery
  }
}