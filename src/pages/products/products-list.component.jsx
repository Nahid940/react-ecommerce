import React, { Component,useEffect,useState,useRef,useCallback } from 'react'
import {Link} from 'react-router-dom'
import SingleProduct from '../../components/single-product/single-product.component'
import axios from 'axios'
import './styles.css'


const ProductList=(props)=>
{
    const [products,setProducts]=useState([])
    const [limit,setLimit]=useState(25)
    const [totalPage,setTotalPage]=useState(0)
    const [offset,setOffset]=useState(0)
    const [hasMore,setHasMore]=useState(false)
    const [pageNumber,setPageNumber]=useState(1)
    const [currentPage,setCurrentPage]=useState(1)
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
            setProducts(
                res.data.products
            )
            setTotalPage(res.data.total.total)
            setIsLoading(false)
            setHasMore(res.data.hasMore)
        })
    },[props.match.params.id])

    const loadMore=()=>
    {
        setIsLoading(true)
        axios.get(`http://localhost/ecommerce-api/apis/products.php`,{
            params: {
                products:1,
                id: props.match.params.id,
                offset:currentPage,
                limit:limit
              }
        }).then(res=>{
            let products=res.data.products
            setProducts(prevProducts=>{
                return [...prevProducts,...res.data.products]
            })
            setCurrentPage(res.data.currentPage)
            setIsLoading(false)
            setHasMore(res.data.hasMore)
        })
    }

    const [catID,setCatID]=useState(props.match.params.id)

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
        <section className="product-area shop-sidebar shop ">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-lg-9 col-md-8 col-12">
                            <div className="row">
                               <SingleProduct products={products} hasMore={hasMore}></SingleProduct>
                            </div>

                            {products.length?
                            hasMore?
                            <div className="loadmorebutton">
                                {isLoading?<a className="btn" style={{backgroundColor: '#64b1f3',borderRadius: '4px',padding: '11px',color: '#fff',textTransform: 'capitalize',width:'100px',height:'46px',cursor:'pointer'}} >Loading----</a>:<a onClick={loadMore} className="btn" style={{backgroundColor: '#64b1f3',borderRadius: '4px',padding: '11px',color: '#fff',textTransform: 'capitalize',width:'100px',height:'46px',cursor:'pointer'}} >Load More</a>}
                            </div>:'':<h4>No Product Found!!</h4>
                            }
                          

                        </div>
                    </div>
                </div>
        </section>
        </React.Fragment>

    
    )
}

export default ProductList