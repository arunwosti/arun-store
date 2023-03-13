import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from "react-icons/io"
import watch from "../images/watch.jpg"
import Container from '../componets/Container'
const Checkout = () => {
  return (
    <Container class1='checkout-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-7'>
                <div className='checkout-left-data'>
                    <h3 className='website-name'>Arun's Store</h3>
                    <nav style={{"--bs-breadcrumb-divider":">"}} aria-label="breadcrumb">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item ">
                            <Link className='total-price' to={"/cart"}>Cart</Link>  
                          </li>&nbsp; /
                          <li className="breadcrumb-item total " aria-current="page">Information</li>&nbsp; /
                          <li className="breadcrumb-item total-price active">Shipping</li>&nbsp; /
                          <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                      </ol>
                      </nav>
                      <h4 className='title total'>
                        Contact Information
                      </h4>
                      <p className='user-details total-price'>Arun Wosti (Ostiarun55@gmail.com)</p>
                      <h4 className='mb-3'>Shipping Address</h4>
                      <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                        <div className='w-100'>
                            <select name='' className='form-control form-select' id=''>
                                <option value='' selected disabled>Select your country</option>
                            </select>
                        </div>
                        <div className='flex-grow-1'>
                            <input type='text' className='form-control' placeholder='First Name'/>
                        </div>
                        <div className='flex-grow-1'>
                            <input type='text' className='form-control' placeholder='Last Name'/>
                        </div>
                        <div className='w-100'>
                            <input type='text' className='form-control' placeholder='Address'/>
                        </div>
                        <div className='w-100'>
                            <input type='text' className='form-control' placeholder='Apartment, suite, etc. (Optional)'/>
                        </div>
                        <div  className='flex-grow-1'>
                            <input type='text' className='form-control' placeholder='City'/>
                        </div>
                        <div className='flex-grow-1'>
                        <select name='' className='form-control form-select' id=''>
                            <option value='' selected disabled>State</option>
                        </select>
                        </div>
                        <div  className='flex-grow-1'>
                            <input type='text' className='form-control' placeholder='ZIP Code'/>
                        </div>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between align-items-center'>
                            <Link to='/cart' className='text-dark'><IoIosArrowBack className='mb-1'/> Return to cart</Link>
                            <Link to='/shipping' className='button'>Continue to Shipping.</Link>
                            </div>
                        </div>
                      </form>
                </div>
            </div>
            <div className='col-5'>
                <div className='border-bottom py-4'>
                    <div className='d-flex gap-10 mb-2 align-items-center'>
                    <div className=' d-flex gap-10'>
                        <div className='w-25 position-relative'>
                            <span className='badge bg-secondary text-white rounded-circle position-absolute'>1</span>
                            <img src={watch} alt='picture' className='img-fluid' />
                        </div>
                        <div className='w-60 align-items-center'>
                            <h5 className='total-price'>fgdghjfhjdghdfh</h5>
                            <p className='total-price'>fgtftrrsfcjvghfhjvv</p>
                        </div>
                    </div>
                    <div className='w-15 flex-grow-1'>
                        <h5 className='total'>$100</h5>
                    </div>
                    </div>
                </div>
                <div className='border-bottom py-4'>
                    <div className='d-flex gap-10 mb-2 align-items-center'>
                    <div className=' d-flex gap-10 '>
                        <div className='w-25 position-relative'>
                            <span className='badge bg-secondary text-white rounded-circle position-absolute'>1</span>
                            <img src={watch} alt='picture' className='img-fluid' />
                        </div>
                        <div className='w-60 align-items-center'>
                            <h5 className='total-price'>fgdghjfhjdghdfh</h5>
                            <p className='total-price'>fgtftrrsfcjvghfhjvv</p>
                        </div>
                    </div>
                    <div className='w-15 flex-grow-1'>
                        <h5 className='total'>$100</h5>
                    </div>
                    </div>
                </div>
                <div className='border-bottom py-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='total'>SubTotal</p>
                    <p className='total-price'>$200</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0 total'>Shipping</p>
                    <p className='mb-0 total-price'>$19.65</p>
                </div>
                </div>
                <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                    <h4 className='total'>Total</h4>
                    <h5 className='total-price'>$219.65</h5>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Checkout