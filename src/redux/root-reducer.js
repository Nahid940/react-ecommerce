import {combineReducers} from 'redux'

import categoryReducer from './category/category-reducer'
import cartReducer from './cart/cart-reducer'

export default combineReducers({
    'category':categoryReducer,
    'cartitems':cartReducer
})
