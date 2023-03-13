import React from 'react'
import BlogCard from './blogCard'
import Container from './Container'

const Blog = () => {
  return (
    <Container class1='blog-wrapper py-5 home-wrapper-2'>
      <div className='row'>
                <div className='col-12'>
                    <h3 className='section-heading'>Our Latest Blogs</h3>
                </div>
                <div className='row'>
                  <div className='col-3'>
                  <BlogCard/>
                  </div>
                  <div className='col-3'>
                  <BlogCard/>
                  </div>
                  <div className='col-3'>
                  <BlogCard/>
                  </div>
                  <div className='col-3'>
                  <BlogCard/>
                  </div>
                </div>
            </div>
    </Container>
   
  )
}

export default Blog