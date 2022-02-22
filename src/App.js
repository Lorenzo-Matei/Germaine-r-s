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
import ContentPage from './pages/content/content-page.component';
import AboutPage from './pages/contact/contact.component';
import ContactPage from './pages/about/about.component';
import ProductListingsPage from './pages/product-listings/product-listings.component';
import NavbarFloating from './components/navbar-floating/navbar-floating.component';
import Background from '../src/assets/images/backgrounds/kitchen1.jpg';

const App = () => {
  return (
    <div className='site-container' style={{ 
      backgroundImage: `url(${Background})`, 
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
      }}>
      <NavbarFloating/>
      <HomePage/>
      <ProductListingsPage/>
      <ProductListingsPage/>
      <ProductListingsPage/>
      <ProductListingsPage/>
      <ProductListingsPage/>
      <ProductListingsPage/>
      <ProductListingsPage/>

    </div>


    // <Router>
    //   <NavBar/>
    //     <main>
    //       <Routes>
    //         <Route path="/home" component={<HomePage/>} />
    //         <Route path="/products" element={<ProductListingsPage/>} />
    //         {/* <Route path="/about" element={<AboutPage/>} /> */}
    //         <Route path="/contact-us" element={<ContactPage/>} />
    //         {/* <Route path="/content" element={<ContentPage/>} /> */}

    //         {/* <Redirect to="/Home"/> */}
    //       </Routes> 
    //     </main>
  
    // </Router>

  )

}

export default App;
