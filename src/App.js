import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from 'react-router-dom';



//Autoquotes
//Reach out by email or phone to inquire about API usage.


import HomePage from './pages/homepage/homepage.component';
import Showroom from './pages/showroom/showrooom.component';
import ContactPage from './pages/contact/contact.component';
import ProductListingsPage from './pages/product-listings/product-listings.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';

import NavbarFloating from './components/navbar-floating/navbar-floating.component';
import Background from '../src/assets/images/backgrounds/kitchen1.jpg';

import SearchPage from './pages/search/search.component';
import CartPage from './pages/cart/cart-page.component';
import ProductSearchPage from './pages/products-search/products-search-page.component';

const App = () => {
  return (
    <div className='site-container' style={{ 
      backgroundImage: `url(${Background})`, 
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      
      }}>

      <Router>
        <NavbarFloating/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductSearchPage/>}/>
          <Route path="/shop" element={<ProductListingsPage/>}/>
          <Route path="/showroom" element={<Showroom/>}/>
          <Route path="/contact-us" element={<ContactPage/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </Router>

    </div>

  )

}

export default App;
