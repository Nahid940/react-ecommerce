import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage-component'
import Footer from './components/footer/footer.component';
import Header from './pages/top/header.component'
import Products from './pages/products/products-list.component'
import {Route,Switch} from 'react-router-dom'
import SingleProductView from './pages/single-product-view/single-product-view.component'

function App() {
  return (
    <div className="App">
          <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/:category/:id" component={Products}></Route>
                <Route exact path="/product/view/:id" component={SingleProductView}></Route>
                {/* <Route exact path="/contact" component={HomePage}></Route> */}
            </Switch>
          <Footer/>
    </div>
  );
}

export default App;
