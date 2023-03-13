import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrum from '../componets/BreadCrum'
import Custominput from '../componets/Custominput'
import Meta from '../componets/Meta'

const ResetPassword = () => {
  return (
    <>
    <Meta title="Reset Password"/>
    <BreadCrum title="Reset Password"/>
    <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-30'>
                        <Custominput type='password' name='password' classname='' placeholder='Password'/>
                        <Custominput type='password' name='confpassword' classname='' placeholder='Confirm Password'/>
                            <div>
                                
                                <div className='d-flex justify-content-center mt-3 gap-15 align-items-center'>
                                    <Link to={"/login"}>
                                    <button className='button border-0' type='submit'>OK</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ResetPassword