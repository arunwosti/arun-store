import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsInstagram, BsYoutube} from "react-icons/bs"
import newsletter from "../images/newsletter.png"
const Footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className='container-xxl'>
        <div className='row align-item-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-item-centre'>
              <img src={newsletter} alt='newsletter'></img>
              <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group ">
             <input type="text" className="form-control py-1" placeholder="Your Email Address..." aria-label="Your Email Address..." aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                08 Tarekshwor, Kathmandu, Nepal
                <br/>PinCode: 40047
              </address>
              <a 
                href='tel: +977 9840135602' className='mt-3 d-block mb-2 text-white'>
                +977 9840135602
              </a>
              <a 
                href='mailto: ostiarun55@gmail.com' className='mt-3 d-block mb-0 text-white'>
                ostiarun55@gmail.com
              </a>
              <div className='social-icons d-flex align-item-center gap-30 mt-4'>
                <a className='text-white' href=''>
                  <BsLinkedin className='fs-4'/>
                </a>
                <a className='text-white' href=''>
                  <BsInstagram className='fs-4'/>
                </a>
                <a className='text-white' href=''>
                  <BsGithub className='fs-4'/>
                </a>
                <a className='text-white' href=''>
                  <BsYoutube className='fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to="/privacy_policy">Privacy Policy</Link>
              <Link  className='text-white py-2 mb-1'to="/refund">Refund Policy</Link>
              <Link className='text-white py-2 mb-1' to="/shipping_policy">Shipping Policy</Link>
              <Link className='text-white py-2 mb-1' to="/terms_conditions">Terms & Conditions</Link>
              <Link className='text-white py-2 mb-1' to="/blogs">Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to="">About Us</Link>
              <Link  className='text-white py-2 mb-1'to="">Faq</Link>
              <Link className='text-white py-2 mb-1' to="">Contact</Link>
              
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' to="">Laptops</Link>
              <Link  className='text-white py-2 mb-1'to="">Headphones</Link>
              <Link className='text-white py-2 mb-1' to="">Tablets</Link>
              <Link className='text-white py-2 mb-1' to="">Watches</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy: {new Date().getFullYear()}: Powered by Arun Wosti.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer