import React, { Component } from 'react'
import TopBar from '../../components/top-bar/top-bar.component'
import MiddleBar from '../middle-bar-component'
import Navbar from '../../components/navbar/navbar.component'
import MainSlider from '../main-slider/main-slider.component'
import {connect} from 'react-redux'

const Header=({enable_category})=>
{
    const showNavBar=(status)=>{
        if(status)
        {
            //return 'main-category'
            return 'header shop'
        }
        //return 'main-category-hidden'
        return 'header shop sticky'
    }
    return(
        <div className='homepage-div'>
            <header className="header shop">
                <TopBar></TopBar>
                <MiddleBar></MiddleBar>
                <Navbar></Navbar>
            </header>
        </div>
    )
}

const mapStateToProps=(state)=>({
    enable_category:state.category.showCategoryBar
})

export default connect(mapStateToProps)(Header)