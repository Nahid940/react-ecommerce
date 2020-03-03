import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const ProductList=()=>
{
    return(
      <React.Fragment>
        <div className="breadcrumbs">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="bread-inner">
                        <ul className="bread-list">
                            <li><a href="index1.html">Home<i className="ti-arrow-right"></i></a></li>
                            <li className="active"><a href="blog-single.html">Shop Grid</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="product-area shop-sidebar shop section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>


                    <div className="col-lg-9 col-md-8 col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="shop-top">
                                        <div className="shop-shorter">
                                            <div className="single-shorter">
                                                <label>Show :</label>
                                                <select style={{display: 'none'}}>
                                                    <option defaultValue="selected">09</option>
                                                    <option>15</option>
                                                    <option>25</option>
                                                    <option>30</option>
                                                </select><div className="nice-select" tabIndex="0"><span className="current">09</span><ul className="list"><li data-value="09" className="option selected">09</li><li data-value="15" className="option">15</li><li data-value="25" className="option">25</li><li data-value="30" className="option">30</li></ul></div>
                                            </div>
                                            <div className="single-shorter">
                                                <label>Sort By :</label>
                                                <select style={{display: 'none'}}>
                                                    <option defaultValue="selected">Name</option>
                                                    <option>Price</option>
                                                    <option>Size</option>
                                                </select><div className="nice-select" tabIndex="0"><span className="current">Name</span><ul className="list"><li data-value="Name" className="option selected">Name</li><li data-value="Price" className="option">Price</li><li data-value="Size" className="option">Size</li></ul></div>
                                            </div>
                                        </div>
                                        <ul className="view-mode">
                                            <li className="active"><a href="shop-grid.html"><i className="fa fa-th-large"></i></a></li>
                                            <li><a href="shop-list.html"><i className="fa fa-th-list"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#"/>
                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#"/>
                                            </a>
                                            <div className="button-head">
                                                <div className="product-action">
                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                </div>
                                                <div className="product-action-2">
                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                            <div className="product-price">
                                                <span>$29.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </React.Fragment>

    
    )
}

export default ProductList