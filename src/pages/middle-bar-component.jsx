import React, { Component } from 'react'
import SearchBox from '../components/search-box/searh-box-component'
import Logo from './logo/logo.component'
import WishList from './wishlist/wishlist.component'
import CartList from '../components/cart/cart-list.component'

const MiddleBar=()=>{
    return(
        <div className="middle-bar-div">
            <div className="middle-inner">
                <div className="container">
                    <div className="row">
                        <Logo/>
                        <SearchBox/>
                        <div className="col-lg-2 col-md-3 col-12">
                            <div className="right-bar">
                                <WishList/>
                                <CartList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleBar