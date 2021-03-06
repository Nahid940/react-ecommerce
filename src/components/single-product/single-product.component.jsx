import React, { Component,useEffect,useState,useRef,useCallback } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addItemTocart} from '../../redux/cart/cart-action'

const SingleProduct=(props)=>
{
    const {products,addItemTocart}=props
    const observer=useRef()
    // const lastProductItem=useCallback(node=>{
    //     if(props.isLoading) return 
    //     if(observer.current){observer.current.disconnect()}
    //     observer.current=new IntersectionObserver(entries=>{
    //         if(entries[0].isIntersecting && hasMore)
    //         {
    //             pageNumberPass(prevPageNumber=>prevPageNumber+1)
    //         }
    //     })

    //     if(node) observer.current.observe(node)
    //     // console.log(node)
    // },[isLoading,hasMore])

    return(
        products.map((product,index)=>{
            return <div className="col-sm-3 items" key={Math.random()}>
                <div className="single-product">
                    <div className="product-img">
                        <Link to={`/product/view/${product.productID}`}>
                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#"/>
                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#"/>
                        </Link>
                        <div className="button-head">
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                            </div>
                            <div className="product-action-2">
                                <a title="Add to cart" href="#" onClick={()=>addItemTocart(product)}>Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <h3><a href="product-details.html">{product.product_title}</a></h3>
                        <div className="product-price">
                            <span>$29.00</span>
                        </div>
                    </div>
                </div>      
            </div>
        })
     )
}

const mapDispatchToProps=dispatch=>({
    addItemTocart:item=>dispatch(addItemTocart(item))
})


export default connect(null,mapDispatchToProps)(SingleProduct)