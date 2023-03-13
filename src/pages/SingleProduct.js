import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrum from '../componets/BreadCrum'
import Meta from '../componets/Meta'
import ProductCard from '../componets/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import Colors from '../componets/colors'
import { Link } from 'react-router-dom'
import {TbGitCompare} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import Container from '../componets/Container'

const SingleProduct = () => {
    const [orderedProduct , setOrderedProduct]= useState(true);
    const props = {width: 500, height: 550, zoomWidth: 600, img: "/images/watch-2.jpg"};
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
    <Meta title="Product Name"/>
    <BreadCrum title="Product Name"/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
    <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div>
                            <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className='other-product-images d-flex flex-wrap gap-15'>
                        <div>
                            <img src='/images/watch.jpg' alt='watch' className='img-fluid'/>
                        </div>
                        <div>
                            <img src='/images/watch-1.jpg' alt='watch-1' className='img-fluid'/>
                        </div>
                        <div>
                            <img src='/images/watch-1.jpg' alt='watch-3' className='img-fluid'/>
                        </div>
                        <div>
                            <img src='/images/watch.jpg' alt='watch' className='img-fluid'/>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='main-product-details'>
                        <div className='border-bottom'>
                        <h3 className='title'>Kids Headphones Bulk 10 packs multi coloured for student.</h3>
                        </div>
                        <div className='border-bottom py-3'>
                            <p className='price'>$ 100</p>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                                 count={5}
                                value={3}
                                size={24}
                                 edit={false}
                                 activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'>( 2 Reviews )</p>
                            </div>
                            <a classname="review-btn"href="#review">Write a Review.</a>
                        </div>
                        <div className='border-bottom py-3'>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Type:</h3><p className='product-data '>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand:</h3><p className='product-data '>Gurkha</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Category:</h3><p className='product-data '>Sporty</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Tags:</h3><p className='product-data '>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>SKU:</h3><p className='product-data '>MAK567</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Availability:</h3><p className='product-data '>In Stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Size:</h3>
                                <div className='d-flex flex-wrap gap-15'>
                                    <span className='badge border  border-1 bg-white text-dark border-secondary'>S</span>
                                    <span className='badge border  border-1 bg-white text-dark border-secondary'>M</span>
                                    <span className='badge border  border-1 bg-white text-dark border-secondary'>L</span>
                                    <span className='badge  border border-1 bg-white text-dark border-secondary'>XL</span>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3 '>
                                <h3 className='product-heading'>Color:</h3>
                                 <Colors/>
                            </div>
                            <div className='d-flex gap-10 align-items-center flex-row mt-2 mb-3'>
                                <h3 className='product-heading'>Quantity:</h3>
                                <div className=''>
                                    <input type="number" name="" placeholder='1' style={{width:"70px"}} min={1} max={10} id="" className='form-control'/>
                                </div>
                                <div className='d-flex ms-5 gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>ADD TO CART</button>
                                    <Link className='button signup' to={"/signup"}>BUY IT NOW</Link>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-15'>
                                <div>
                                    <a href=''><TbGitCompare className='fs-5 me-2'/> Add to Compare</a>
                                </div>
                                <div>
                                    <a href=''><AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a>
                                </div>
                            </div>
                            <div className='d-flex gap-10  flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Shipping & Returns :</h3>
                                <p className='product-data'>
                                    Free shipping and returns available on every orders!<br/> We ship all US domestic orders within <b>5-10 business days</b>
                                </p>
                            </div>
                            <div className='d-flex gap-10  flex-column my-3'>
                                <h3 className='product-heading'>Materials :</h3>
                                <p className='product-data'>
                                    Free shipping and returns available on every orders!<br/> We ship all US domestic orders within <b>5-10 business days</b>
                                </p>
                            </div>
                            <div className='d-flex gap-10  flex-column my-3'>
                                <h3 className='product-heading'>Product Links :</h3>
                               <a
                                href='javascript:void(0);'
                               onClick={()=>{
                                copyToClipboard("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2Fimages%2Fproduct%2Fiphone%2Fstandard%2Fiphonex_front_back_glass_big.jpg.large.jpg&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2F2017%2F09%2Fthe-future-is-here-iphone-x%2F&tbnid=UkttBdZD8AoYBM&vet=12ahUKEwikhq2Jk5f9AhWPBbcAHZPRBZwQMygHegUIARDtAQ..i&docid=HgDTMAL75EEqiM&w=816&h=1200&q=iphone&ved=2ahUKEwikhq2Jk5f9AhWPBbcAHZPRBZwQMygHegUIARDtAQ");
                               }}>
                                Copy Product Link
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    
    <Container class1='reviews-wrapper py-5 home-wrapper-2'>
    <div className='row'>
                <div className='col-12'>
                <h4 >Description</h4>
                    <div className='bg-white p-3'>
                   
                    <p>
                    The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. 
                    As of 2022, the iPhone accounts for 15.6% of global smartphone 
                    </p>
                    </div>
                </div>
            </div>
    </Container>

    <section  id='review' className='reviews-wrapper home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <h3>Reviews</h3>
                    <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex gap-10 align-items-center'>
                            <ReactStars
                                 count={5}
                                value={3}
                                size={24}
                                 edit={false}
                                 activeColor="#ffd700"
                            />
                            <p className='mb-0'>Based on 2 Reviews</p>
                            </div> 
                        </div>
                        {orderedProduct && (
                            <div>
                            <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                        </div>
                        )}
                    </div>
                    <div className='review-form py-4'>
                        <h4>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                     <div>
                     <ReactStars
                                 count={5}
                                value={3}
                                size={24}
                                 edit={true}
                                 activeColor="#ffd700"
                            />
                     </div>
                  <div>
                    <textarea name='' id='' className='w-100 form-control' cols="30" rows="10" placeholder='Comments......'></textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button border-0'>Submit Review</button>
                  </div>
                </form>
                    </div>
                    <div className='reviews mt-4'>
                        <div className='review'>
                        <div className='d-flex gap-10 align-items-center'>
                            <h6 className='mb-0'>Arun</h6>
                        <ReactStars
                                 count={5}
                                value={3}
                                size={24}
                                 edit={false}
                                 activeColor="#ffd700"
                            />
                        </div>
                            <p className='mt-3'>The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. 
                    As of 2022, the iPhone accounts for 15.6% of global smartphone </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
    <div className='row'>
                <div className='col-12'>
                    <h3 className='section-heading'>Our Popular Products</h3>
                </div>
                <ProductCard/>
                <ProductCard/>
            </div>
    </Container>
   

    </>
  )
}

export default SingleProduct