import React, { Component } from 'react'
import './navbar.styles.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Navbar extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            categories:[]
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost/ecommerce-api/apis/category.php?categories")
        .then((res)=>{
            const categories=res.data.categories
            this.setState({
                categories:categories
            })
        })
    }

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
                                        {this.state.categories.map(category=>(
                                            <li key={category.categoryID}>
                                                <Link to="/products">{category.category} {category.child_categories.length>=1?<i className="fa fa-angle-right arrow-icon" aria-hidden="true"></i>:''}</Link>
                                                <ul className="sub-category">
                                                    {category.child_categories.map(child=><li key={child.categoryID}><Link to="/products">{child.category}</Link></li>)}
                                                </ul>
                                            </li>
                                        ))}
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