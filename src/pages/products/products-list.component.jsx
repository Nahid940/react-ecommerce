import React, { Component,useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import SingleProduct from '../../components/single-product/single-product.component'
import axios from 'axios'


const ProductList=(props)=>
{
    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost/ecommerce-api/apis/products.php?products&id=${props.match.params.id}`).then(res=>{
            let products=res.data.products
            setProducts(res.data.products)
        })
    },[props.match.params.id])

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
                            {/* {console.log(products.newproducts)} */}
                            <div className="row">
                                {products.map(product=>(<SingleProduct product={product}></SingleProduct>))}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </React.Fragment>

    
    )
}

export default ProductList