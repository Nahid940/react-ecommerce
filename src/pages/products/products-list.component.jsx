import React, { Component,useEffect,useState,useRef,useCallback } from 'react'
import {Link} from 'react-router-dom'
import SingleProduct from '../../components/single-product/single-product.component'
import axios from 'axios'


const ProductList=(props)=>
{
    const [products,setProducts]=useState([])
    const [limit,setLimit]=useState(6)
    const [totalPage,setTotalPage]=useState(0)
    const [offset,setOffset]=useState(0)
    const [hasMore,setHasMore]=useState(false)
    const [pageNumber,setPageNumber]=useState(1)
    const [isLoading,setIsLoading]=useState(true)
    const [scrolling,setScrolling]=useState(false)

    const observer=useRef()

    // const pageNumberPass=(pagenumber)=>
    // {
    //     setPageNumber(pagenumber)
    // }


    // useEffect(()=>
    // {
    //     window.addEventListener('scroll',(e)=>{
    //         if(scrolling) return
    //         const lastDiv=document.querySelector('.items:last-child')
    //         // console.log(lastDiv)
    //         e.preventDefault()
    //         const lastDivOffset=lastDiv.offsetTop+lastDiv.clientHeight
    //         const pageOffset=window.pageYOffset+window.innerHeight
    //         var bottomOffset=50
    //         if(pageOffset>lastDivOffset-bottomOffset)
    //         {
    //             setPageNumber(prevPageNumber=>prevPageNumber+1)
    //             // console.log(lastDiv.offsetTop)
    //         }
    //     })
    // },[])
    
    useEffect(()=>{
        setIsLoading(true)
        axios.get(`http://localhost/ecommerce-api/apis/products.php`,{
            params: {
                products:1,
                id: props.match.params.id,
                offset:pageNumber,
                limit:limit
              }
        }).then(res=>{
            let products=res.data.products
            setProducts(prevProducts=>{
                return [...prevProducts,...res.data.products]
            })
            // setProducts(
            //     res.data.products
            // )
            setTotalPage(res.data.total.total)
            // setHasMore(res.data.products.length>0)
            setIsLoading(false)
            // setPageNumber(pageNumber)
            //console.log(totalPage)
        })
    },[props.match.params.id,pageNumber])

    const loadMore=()=>
    {
        setPageNumber(prevPageNumber=>prevPageNumber+1)
    }

    const [catID,setCatID]=useState(props.match.params.id)

    return(
      <React.Fragment>
          {console.log(pageNumber)}
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
                               {isLoading?"Loading------":
                                    <SingleProduct products={products} hasMore={hasMore} isLoading={isLoading} ></SingleProduct>
                                }
                                <a onClick={loadMore} >Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </React.Fragment>

    
    )
}

export default ProductList