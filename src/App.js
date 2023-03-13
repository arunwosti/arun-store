import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './componets/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgetpassword from './pages/Forgetpassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Refund from './pages/Refund';
import ShippingPolicy from './pages/ShippingPolicy';
import Term_conditions from './pages/Term_conditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Shipping from './pages/Shipping';
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>  
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='store' element={<OurStore/>}/>
          <Route path='blogs' element={<Blog/>}/>
          <Route path='blog/:id' element={<SingleBlog/>}/>
          <Route path='compare-product' element={<CompareProducts/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='forget_password' element={<Forgetpassword/>}/>
          <Route path='reset_password' element={<ResetPassword/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='shipping' element={<Shipping/>}/>
          <Route path='privacy_policy' element={<PrivacyPolicy/>}/>
          <Route path='refund' element={<Refund/>}/>
          <Route path='shipping_policy' element={<ShippingPolicy/>}/>
          <Route path='terms_conditions' element={<Term_conditions/>}/>
          <Route path='product/:id' element={<SingleProduct/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
