import React from 'react'
import BreadCrum from '../componets/BreadCrum'
import Meta from '../componets/Meta'
import watch from "../images/watch.jpg"
import {AiOutlineDelete} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Container from '../componets/Container'

const Cart = () => {
  return (
    <>
    <Meta title={"Cart"}/>
    <BreadCrum title={"Cart"}/>
    <Container class1='cart-wrapper home-wrapper-2 py-5'>
    <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>PRODUCT</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>

                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img src={watch} className="img-fluid" alt='image' />
                            </div>
                            <div className='w-75'>
                                <p>asdfgh</p>
                                <p>Size: XXL</p>
                                <p>Color: Black</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$ 100</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15 '>
                            <div>
                                <input className='form-control' type="number" name="" id="" min={1} max={10} placeholder={1} />
                            </div>
                            <div className='bg-secondary delete_icon'>
                                <AiOutlineDelete/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                        <h5 className='price'>$ 100</h5>
                        </div>
                    </div>
                    {/*cart data 2 */}
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img src={watch} className="img-fluid" alt='image' />
                            </div>
                            <div className='w-75'>
                                <p>asdfgh</p>
                                <p>Size: M</p>
                                <p>Color: ted</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$ 100</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15 '>
                            <div>
                                <input className='form-control' type="number" name="" id="" min={1} max={10} placeholder={1} />
                            </div>
                            <div className='bg-secondary delete_icon'>
                                <AiOutlineDelete/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                        <h5 className='price'>$ 100</h5>
                        </div>
                    </div>
                </div>
                {/*2nd Row */}
                <div className='col-12 py-2 mt-4'>
                    <div className='d-flex justify-content-between align-items-baseline'>
                    <Link to={"/store"} className='button'>Continue Shopping</Link>
                    <div className='d-flex flex-column align-items-end'>
                        <h4>SubTotal: $200</h4>
                        <p>Taxes and shipping calculated at checkout.</p>
                        <Link to={"/checkout"} className='button'>Checkout</Link>
                    </div>
                    </div>
                </div>
            </div>
    </Container>
  
    </>
  )
}

export default Cart