import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from "react-icons/io"
import watch from "../images/watch.jpg"
import Container from '../componets/Container'

const Shipping = () => {
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
                          <li className="breadcrumb-item total-price " aria-current="page">Information</li>&nbsp; /
                          <li className="breadcrumb-item total ">Shipping</li>&nbsp; /
                          <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                      </ol>
                      </nav>
                      <div className='ship-method mb-5'>
                      <div className='d-flex pb-2 align-items-center justify-content-between border-bottom'>
                        
                        <p className='title'>Contact</p>
                      <p className='title'>ostiarun55@gmail.com</p>
                        
                      <Link to={"/checkout"} className='title'>Change</Link>
                      </div>
                      <div className='d-flex pt-2  align-items-center justify-content-between '>
                        
                        <p className='title'>Ship to</p>
                      <p className='title'>lambagar, kathmandu, nepal</p>
                        
                      <Link to={"/checkout"} className='title'>Change</Link>
                      </div>
                      </div>
                      <h4 className='title total mb-2'>
                        Shipping Method
                      </h4>
                      <div className='d-flex mb-5 ship-method align-items-center justify-content-between'>
                        <div className='d-flex align-items-center gap-15'>
                        <input type={"radio"} className="m-0 p-0 text-dark" />
                      <p className='title'>Standard</p>
                        </div>
                        <h5 className='total'>$19.65</h5>
                      </div>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between align-items-center'>
                            <Link to='/checkout' className='text-dark'><IoIosArrowBack className='mb-1'/> Return to information</Link>
                            <Link to='/' className='button'>Continue to Payment.</Link>
                            </div>
                        </div>
                      
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

export default Shipping