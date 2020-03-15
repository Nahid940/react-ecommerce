import {addItemToCart} from './cart.utils'
import {cartActionType} from './actions'
const INITIAL_STATE={
    cartItems:[],
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case cartActionType.ADD_TO_CART:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        default :
        return state
    }
}

export default cartReducer