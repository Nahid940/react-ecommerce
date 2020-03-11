import React, { Component,useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './styles.css'
const SearchBox=()=>{

    const [searchValue,setSearchValue]=useState('')
    const [results,setResults]=useState([])

    const handleChange=(e)=>
    {
        e.preventDefault()
        const {name,value}=e.target
        setSearchValue(value)
    }
    

    useEffect(()=>{
        let cancel;
        axios.get(`http://localhost/ecommerce-api/apis/products.php`,{
            params:{
                'search_product':1,
                'key':searchValue,
            },
            cancelToken:new axios.CancelToken(c=>cancel=c)
        }).then(res=>{
            setResults(res.data.products)
        }).catch(e=>{
            if(axios.isCancel(e)) return 
        })
        return()=> cancel()
    },[searchValue])

    return(
        <div className="col-lg-8 col-md-7 col-12">
            <div className="search-bar-top">
                <div className="search-bar">
                    <form>
                        <input value={searchValue} onChange={handleChange} name="searchValue" autoComplete="off" placeholder="Search Products Here....."/>
                        <button className="btnn"><i className="ti-search"></i></button>
                    </form>
                    <div className={results.length>=1?'search-reasult':"search-reasult result-hidden"}>
                        <ul>
                            {
                                results.map(result=>(
                                <li> <Link to={`/product/view/${result.productID}`}>{result.product_title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBox