export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CHOOSE_SAUCE = 'CHOOSE_SAUCE'
export const CHOOSE_TOPPINGS = 'CHOOSE_TOPPINGS'
export const CHOOSE_DELIVERY = 'CHOOSE_DELIVERY'

export const chooseBase = (base) => {
  return {
    type: 'CHOOSE_BASE',
    payload: base
  }
}

export const chooseSauce = (sauce) => {
  return {
    type: 'CHOOSE_SAUCE',
    payload: sauce
  }
}

export const chooseToppings = (topping) => {
  return {
    type: 'CHOOSE_TOPPINGS',
    payload: topping
  }
}

export const chooseDelivery = (delivery) => {
  return {
    type: 'CHOOSE_DELIVERY',
    payload: delivery
  }
}