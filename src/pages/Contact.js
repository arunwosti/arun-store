import React from 'react'
import BreadCrum from '../componets/BreadCrum'
import Meta from '../componets/Meta'
import{AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {BiInfoCircle} from "react-icons/bi"
import Container from '../componets/Container'

const Contact = () => {
  return (
    <>
    <Meta title={"Contact"}/>
    <BreadCrum title={"Contact"}/>
    <Container class1='contact-wrapper home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.8347529806915!2d85.30018378015494!3d27.751164481838792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18cd0b688f4b%3A0x9e46162bbdeaf994!2sManamaiju%20Fuel%20station!5e0!3m2!1sen!2snp!4v1676188270172!5m2!1sen!2snp"
           width="600" 
           height="450" 
           className='border-0 w-100' 
           allowFullScreen="" 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-innerwrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' className='form-control' placeholder='Name'/>
                  </div>
                  <div>
                    <input type='email' className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type='tel' className='form-control' placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name='' id='' className='w-100 form-control' cols="30" rows="10" placeholder='Comments......'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5'/>
                      <address className='mb-0'>Hno: Lambagar, Tarekshwor 08, Kathmandu</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FiPhoneCall className='fs-5'/>
                      <a href='tel:+977 9840135602'>+977 9840135602</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5'/>
                      <a href='mailto:ostiarun55@gmail.com'>ostiarun55@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5'/>
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Contact