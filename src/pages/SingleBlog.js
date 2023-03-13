import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../componets/blogCard'
import BreadCrum from '../componets/BreadCrum'
import Meta from '../componets/Meta'
import {HiArrowNarrowLeft} from "react-icons/hi"
import blog from "../images/blog-1.jpg"
import Container from '../componets/Container'

const SingleBlog = () => {
  return (
    <>
    <Meta title="Single Blog"/>
    <BreadCrum title="Single Blog"/>
    <Container class1='blog-wrapper home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-12'>
            <div className='single-blog-card '>
                <Link to={"/blogs"} className="d-flex align-items-center gap-10"><HiArrowNarrowLeft className='fs-4'/>Go back to Blogs</Link>
                <h3 className='title'>A Beautiful Sunday  Morning Renaissance</h3>
                <img src={blog} alt='blog' className='img-fluid w-100 my-4'/>
                <p>The iPhone is a line of smartphones produced by Apple Inc. which uses Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. 
                    As of 2022, the iPhone accounts for 15.6% of global smartphone market share</p>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default SingleBlog