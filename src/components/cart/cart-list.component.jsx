import React, { Component } from 'react'
import {connect} from 'react-redux'

const CartList=({cartItems,total_items})=>{
    return(
        <div className="sinlge-bar shopping">
            <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">{total_items}</span></a>
            <div className="shopping-item">
                <div className="dropdown-cart-header">
                    <span>{cartItems.length} Items</span>
                    <a href="#">View Cart</a>
                </div>
                <ul className="shopping-list">
                    {cartItems.map(cartItem=>(
                        <li key={Math.random()}>
                            <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                            <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"/></a>
                            <h4><a href="#">{cartItem.product_title}</a></h4>
                        <p className="quantity">{cartItem.quantity} x - <span className="amount">$35.00</span></p>
                        </li>
                    ))}
                </ul>
                <div className="bottom">
                    <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                    </div>
                    <a href="checkout.html" className="btn animate">Checkout</a>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=({cartitems:{cartItems}})=>({
    cartItems,
    total_items:cartItems.reduce((accumulatedQunantity,cartitem)=>accumulatedQunantity+cartitem.quantity,0)
})



export default connect(mapStateToProps)(CartList)