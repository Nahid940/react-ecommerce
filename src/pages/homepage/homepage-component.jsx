import React from 'react'
import TopBar from '../../components/top-bar/top-bar.component'
import MiddleBar from '../middle-bar-component'
import Navbar from '../../components/navbar/navbar.component'
import MainSlider from '../main-slider/main-slider.component'
import SmallBanner from '../small-banner/small-banner.component'

const HomePage=()=>
{
    return(
        <div className='homepage-div'>
            <header className="header shop">
                <TopBar></TopBar>
                <MiddleBar></MiddleBar>
                <Navbar></Navbar>
                <MainSlider></MainSlider>
                <SmallBanner/>
            </header>
        </div>
    )
}
export default HomePage