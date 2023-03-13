import React from 'react'
import BreadCrum from '../componets/BreadCrum'
import Meta from '../componets/Meta'

const ShippingPolicy = () => {
  return (
    <>
    <Meta title="Shipping Policy"/>
    <BreadCrum title ="Shipping Policy"/>
    <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShippingPolicy