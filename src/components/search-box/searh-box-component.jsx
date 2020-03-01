import React, { Component } from 'react'

const SearchBox=()=>{
    return(
        <div className="col-lg-8 col-md-7 col-12">
            <div className="search-bar-top">
                <div className="search-bar">
                    <select style={{display:'none'}}>
                        <option defaultValue="selected">All Category</option>
                        <option>watch</option>
                        <option>mobile</option>
                        <option>kid’s item</option>
                    </select><div className="nice-select" tabIndex="0"><span className="current">All Category</span><ul className="list"><li data-value="All Category" className="option selected focus">All Category</li><li data-value="watch" className="option">watch</li><li data-value="mobile" className="option">mobile</li><li data-value="kid’s item" className="option">kid’s item</li></ul></div>
                    <form>
                        <input name="search" placeholder="Search Products Here....." type="search"/>
                        <button className="btnn"><i className="ti-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBox