import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage-component'
import Footer from './components/footer/footer.component';
import ShopService from './pages/shopservice/shopservice.component'
import Header from './pages/top/header.component'

function App() {
  return (
    <div className="App">
        <Header/>
          <HomePage></HomePage>
        <Footer/>
    </div>
  );
}

export default App;
