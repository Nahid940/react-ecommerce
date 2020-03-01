import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage-component'
import Footer from './components/footer/footer.component';
import ShopService from './pages/shopservice/shopservice.component'

function App() {
  return (
    <div className="App">
      <HomePage>
      </HomePage>
      <ShopService/>
      <Footer/>
    </div>
  );
}

export default App;
