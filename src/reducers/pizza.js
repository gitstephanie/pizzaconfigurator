import {CHOOSE_BASE, CHOOSE_SAUCE, CHOOSE_TOPPING1, CHOOSE_TOPPING2, CHOOSE_TOPPING3, CHOOSE_DELIVERY} from "../actions/pizza";

const reducer = (state = null, action) => {
    switch (action.type) {
        case CHOOSE_BASE:
         return {
             ...state,
             base: action.payload
         }
        case CHOOSE_SAUCE:
         return {
            ...state,
            sauce: action.payload
        }
        case CHOOSE_TOPPING1:
         return {
            ...state,
            topping0: action.payload
        }
        case CHOOSE_TOPPING2:
         return {
            ...state,
            topping1: action.payload
        }
        case CHOOSE_TOPPING3:
         return {
            ...state,
            topping2: action.payload
        }
        case CHOOSE_DELIVERY:
         return {
            ...state,
            delivery: action.payload
         }
        default:
         return state
    }
}

export default reducer
