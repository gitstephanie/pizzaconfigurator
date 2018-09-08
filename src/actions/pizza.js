export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CHOOSE_SAUCE = 'CHOOSE_SAUCE'
export const CHOOSE_TOPPING1 = 'CHOOSE_TOPPING1'
export const CHOOSE_TOPPING2 = 'CHOOSE_TOPPING2'
export const CHOOSE_TOPPING3 = 'CHOOSE_TOPPING3'
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

export const chooseTopping1 = (topping) => {
  console.log(`topping1 in actions ${topping}`)
  return {
    type: 'CHOOSE_TOPPING1',
    payload: topping
  }
}

export const chooseTopping2 = (topping) => {
  console.log(`topping2 in actions ${topping}`)
  return {
    type: 'CHOOSE_TOPPING2',
    payload: topping
  }
}

export const chooseTopping3 = (topping) => {
  console.log(`topping3 in actions ${topping}`)
  return {
    type: 'CHOOSE_TOPPING3',
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
