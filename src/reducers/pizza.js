import {CREATE_PIZZA} from "../actions/pizza";

const reducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_PIZZA:
         return [...state, action.payload]
        default:
         return state
    }
}

export default reducer