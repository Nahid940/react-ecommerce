import React, { Component } from 'react'

const Logo=()=>
{
    return(
        <div className="col-lg-2 col-md-2 col-12">
            <div className="logo">
                <a href="index.html"><img src="images/logo.png" alt="logo"/></a>
            </div>
            <div className="search-top">
                <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
            
                <div className="search-top">
                    <form className="search-form">
                        <input type="text" placeholder="Search here..." name="search"/>
                        <button value="search" type="submit"><i className="ti-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="mobile-nav"></div>
        </div>
    )
}

export default Logo