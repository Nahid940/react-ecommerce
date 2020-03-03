import React, { Component } from 'react'
import './navbar.styles.css'
import {Link,useRouteMatch} from 'react-router-dom'
import axios from 'axios'
import TopBarNavigation from './topbar-navigation.component'

class Navbar extends Component{

    
    constructor(props)
    {
        super(props)
        this.state={
            categories:[]
        }
        this.childCategoryList=this.childCategoryList.bind(this)
        this.showNavBar=this.showNavBar.bind(this)

    }
    
    componentDidMount()
    {
        axios.get("http://localhost/ecommerce-api/apis/category.php?categories")
        .then((res)=>{
            const categories=res.data.categories
            this.setState({
                categories:categories
            })
        })
    }

    childCategoryList(items)
    {
        if(items.length)
        {
            return <ul className="sub-category">
                 {items.map(child=><li key={child.categoryID}>
                     <Link to={`/${child.category}/${child.categoryID}`}>{child.category}
                        {child.child_categories.length>=1?<i className="fa fa-angle-right arrow-icon" aria-hidden="true"></i>:''}</Link>
                     {this.childCategoryList(child.child_categories)}
                </li>)}
            </ul>
        }
    }

    showNavBar(status)
    {
        if(status)
        {
            return 'main-category'
        }
        return 'main-category-hidden'
    }
    
    render()
    {
        const {enable_category}=this.props
        return(
            <div className="header-inner">
                <div className="container">
                    <div className="cat-nav-head">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="all-category">
                                    <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                                    <ul className={this.showNavBar(enable_category)}>
                                        {this.state.categories.map(category=>(
                                            <li key={category.categoryID}>
                                                <Link to={`/${category.category}/${category.categoryID}`}>{category.category} {category.child_categories.length>=1?<i className="fa fa-angle-right arrow-icon" aria-hidden="true"></i>:''}</Link>
                                                    { this.childCategoryList(category.child_categories)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <TopBarNavigation></TopBarNavigation>
                        </div>
                    </div>
                </div>
		    </div>
        )
    }
}

export default Navbar