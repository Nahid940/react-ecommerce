import React, { Component } from 'react'
const CartList=()=>{
    return(
        <div className="sinlge-bar shopping">
            <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></a>
            <div className="shopping-item">
                <div className="dropdown-cart-header">
                    <span>2 Items</span>
                    <a href="#">View Cart</a>
                </div>
                <ul className="shopping-list">
                    <li>
                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                        <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"/></a>
                        <h4><a href="#">Woman Ring</a></h4>
                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                    </li>
                    <li>
                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                        <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"/></a>
                        <h4><a href="#">Woman Necklace</a></h4>
                        <p className="quantity">1x - <span className="amount">$35.00</span></p>
                    </li>
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

export default CartList