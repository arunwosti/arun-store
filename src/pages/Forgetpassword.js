import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrum from '../componets/BreadCrum'
import Container from '../componets/Container'
import Custominput from '../componets/Custominput'
import Meta from '../componets/Meta'

const Forgetpassword = () => {
  return (
    <>
    <Meta title={"Forget Password"}/> 
    <BreadCrum title={"Forget Password"}/>
    <Container class1='login-wrapper home-wrapper-2 py-5'>
    <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Your Password</h3>
                        <p className='text-center my-2 mb-3'>
                          We will send you an email to reset your password
                        </p>
                        <form action='' className='d-flex flex-column gap-30'>
                        <Custominput type='email' name='email' classname='' placeholder='Email'/>
                            
                            <div>
                                
                                <div className='d-flex justify-content-center flex-column mt-3 gap-15 align-items-center'>
                                  <Link to={"/reset_password"}>
                                    <button className='button border-0' type='submit'>Submit</button>
                                    </Link>
                                    <Link to={"/login"}>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Forgetpassword