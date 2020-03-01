import React, { Component } from 'react'
import TopBar from '../../components/top-bar/top-bar.component'
import MiddleBar from '../middle-bar-component'
import Navbar from '../../components/navbar/navbar.component'
import MainSlider from '../main-slider/main-slider.component'

const Header=()=>
{
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

export default Header