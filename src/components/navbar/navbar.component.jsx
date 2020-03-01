import React, { Component } from 'react'
import './navbar.styles.css'
import {Link} from 'react-router-dom'

class Navbar extends Component{

    render()
    {
        return(
            <div className="header-inner">
                <div className="container">
                    <div className="cat-nav-head">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="all-category">
                                    <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                                    <ul className="main-category">
                                        <li><a href="#">New Arrivals <i className="fa fa-angle-right arrow-icon" aria-hidden="true"></i></a>
                                            <ul className="sub-category">
                                                <li><a href="#">accessories</a></li>
                                                <li><a href="#">best selling</a></li>
                                                <li><a href="#">top 100 offer</a></li>
                                                <li><a href="#">sunglass</a></li>
                                                <li><a href="#">watch</a></li>
                                                <li><a href="#">man’s product</a></li>
                                                <li><a href="#">ladies</a></li>
                                                <li><a href="#">westrn dress</a></li>
                                                <li><a href="#">denim </a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">accessories</a></li>
                                        <li><a href="#">top 100 offer</a></li>
                                        <li><a href="#">sunglass</a></li>
                                        <li><a href="#">watch</a></li>
                                        <li><a href="#">man’s product</a></li>
                                        <li><a href="#">ladies</a></li>
                                        <li><a href="#">westrn dress</a></li>
                                        <li><a href="#">denim </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12">
                                <div className="menu-area">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="navbar-collapse">	
                                            <div className="nav-inner">	
                                                <ul className="nav main-menu menu navbar-nav">
                                                        <li className="active"><Link to='/'>Home</Link></li>
                                                        <li><a href="#">Product</a></li>												
                                                        <li><a href="#">Service</a></li>
                                                        <li><a href="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                                                <li><a href="cart.html">Cart</a></li>
                                                                <li><a href="checkout.html">Checkout</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Pages</a></li>									
                                                        <li><a href="#">Blog<i className="ti-angle-down"></i></a>
                                                            <ul className="dropdown">
                                                                <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="contact">Contact Us</Link></li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
        )
    }
}

export default Navbar