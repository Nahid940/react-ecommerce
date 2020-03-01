import React from 'react'
import SmallBanner from '../small-banner/small-banner.component'
import ShopService from '../shopservice/shopservice.component'
import MainSlider from '../main-slider/main-slider.component'

const HomePage=()=>
{
    return(
        <React.Fragment>
            <MainSlider/>
            <SmallBanner/>
            <ShopService/>
        </React.Fragment>
        
    )
}
export default HomePage