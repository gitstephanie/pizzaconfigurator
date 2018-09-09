import {CHOOSE_BASE, CHOOSE_SAUCE, CHOOSE_TOPPINGS, CHOOSE_DELIVERY} from "../actions/pizza";

const initialState = {
    base: '',
    sauce: '',
    toppings: [],
    delivery: 0
}

const reducer = (state = initialState, action = {}) => {
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
        case CHOOSE_TOPPINGS:
         return {
            ...state,
            toppings: state.toppings.includes(action.payload) ?
                state.toppings.filter(s => s !== action.payload) :
                state.toppings.concat([action.payload])
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
