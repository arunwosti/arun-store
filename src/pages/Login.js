import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrum from '../componets/BreadCrum'
import Container from '../componets/Container'
import Custominput from '../componets/Custominput'
import Meta from '../componets/Meta'

const Login = () => {
  return (
    <>
    <Meta title={"Login"}/>
    <BreadCrum title={"Login"}/>
    <Container class1='login-wrapper home-wrapper-2 py-5'>
    <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Login</h3>
                        <form action='' className='d-flex flex-column gap-30'>
                            <Custominput type='email' name='email' classname='' placeholder='Email'/>
                            <Custominput type='password' name='password' classname='' placeholder='Password'/>
                           
                           
                            <div>
                                <Link to={"/forget_password"}>Forget Password?</Link>
                                <div className='d-flex justify-content-center mt-5 gap-15 align-items-center'>
                                    <Link to={'/'}><button className='button border-0' type='submit'>Login</button></Link>
                                    <Link className='button signup' to={"/signup"}>SignUp</Link>
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

export default Login