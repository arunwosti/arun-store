import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>04 Feb, 2023</p>
                <h5 className='title'>React Fast Marquee</h5>
                <p className='desc'>React Fast Marquee is a lightweight React component that utilizes the power of CSS animations to create silky smooth marquees.</p>
                <Link to="/blog/:id" className='button'>Read More</Link>
            </div>
        </div>

  )
}

export default BlogCard