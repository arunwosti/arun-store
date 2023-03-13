import React from 'react'
import BreadCrum from '../componets/BreadCrum'
import Container from '../componets/Container'
import Meta from '../componets/Meta'

const Wishlist = () => {
  return (
    <>
    <Meta title={"Wishlist"}/>
    <BreadCrum title={"Wishlist"}/>
    <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
    <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='wishlist-card-image'>
                            <img src='images/watch-1.jpg' alt='wishlist' className='img-fluid'/>
                        </div>
                        <div className=' p-3'>
                        <h5 className='title'>Honor T1 7.0 1 GB Rom 7 Inch With Wi-Fo + 3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='wishlist-card-image'>
                            <img src='images/speaker.jpg' alt='wishlist' className='img-fluid'/>
                        </div>
                        <div className=' p-3'>
                        <h5 className='title'>Honor T1 7.0 1 GB Rom 7 Inch With Wi-Fo + 3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='wishlist-card-image'>
                            <img src='images/watch.jpg' alt='wishlist' className='img-fluid'/>
                        </div>
                        <div className=' p-3'>
                        <h5 className='title'>Honor T1 7.0 1 GB Rom 7 Inch With Wi-Fo + 3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='wishlist-card-image'>
                            <img src='images/tab.jpg' alt='wishlist' className='img-fluid'/>
                        </div>
                        <div className=' p-3'>
                        <h5 className='title'>Honor T1 7.0 1 GB Rom 7 Inch With Wi-Fo + 3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Wishlist