import React from 'react'
import {Link} from "react-router-dom"
import Blog from '../componets/blog';
import Brand from '../componets/brand';
import Container from '../componets/Container';
import Meta from '../componets/Meta';
import ProductCard from '../componets/ProductCard';
import SpecialProduct from '../componets/SpecialProduct';
import { services } from '../utils/Data';
const Home = () => {
  return (
    <>
    <Meta title={"Arun's Store"}/>
    <Container class1='home-wrapper-1 py-5'>
    <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img src='images/main-banner-1.jpg' alt='main-banner' className='img-fluid rounded'></img>
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link  className='button' to="">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between gap-10 align-items-center'>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-01.jpg' alt='small-banner' className='img-fluid rounded'></img>
              <div className='small-banner-content position-absolute'>
                <h4>best sale</h4>
                <h5>Laptops Max</h5>
                <p>From $999.00 <br/>or $41.62/mo.</p>
                
              </div>
            </div>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-02.jpg' alt='small-banner' className='img-fluid rounded'></img>
              <div className='small-banner-content position-absolute'>
                <h4>15% off</h4>
                <h5>Smartwatch 7</h5>
                <p>Ship the latest band <br/>styles and colours.</p>
                
              </div>
            </div>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-03.jpg' alt='small-banner' className='img-fluid rounded'></img>
              <div className='small-banner-content position-absolute'>
                <h4>15% off</h4>
                <h5>Smartwatch 7</h5>
                <p>Ship the latest band <br/>styles and colours.</p>
                
              </div>
            </div>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-04.jpg' alt='small-banner' className='img-fluid rounded'></img>
              <div className='small-banner-content position-absolute'>
                <h4>15% off</h4>
                <h5>Smartwatch 7</h5>
                <p>Ship the latest band <br/>styles and colours.</p>
                
              </div>
            </div>
            </div>
          </div>
        </div>
    </Container>
    
    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-12'>
            <div className='d-flex services align-items-center justify-content-between '>
              {
                services?.map((i,j) => {
                  return(
                    <div className='d-flex  align-items-center gap-15' key={j}>
                <img src={i.image} alt='services'/>
                <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                </div>
              </div>
                  )
                })
              }
              
            </div>
          </div>
        </div>
    </Container>
   
    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/watch.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/headphone.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/tv.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/watch.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img className="myImg" src='images/camera.jpg' alt='camera'/>
              </div>
            </div>
          </div>
        </div>
    </Container>
    

    {/*  Featured Products Section*/}
    <Container class1='featured-wrapper py-5 home-wrapper-2'>
    <div className='row'>
                <div className='col-12'>
                    <h3 className='section-heading'>Featured Collection</h3>
                </div>
                <ProductCard/>
              
            </div>
    </Container>
   

     {/*  Famous Products Section*/}
     <Container class1='famous-wrapper py-5 home-wrapper-2'>
     <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/watch-2.jpg' alt='famous' className='img-fluid' ></img>
              <div className='famous-content position-absolute'>
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or $16.99/mo for 25 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous.webp' alt='famous' className='img-fluid' ></img>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>Studio Display</h5>
              <h6 className='text-dark'>600 nits of brightness.</h6>
              <p className='text-dark'>27-inch 5K Retina Display.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-2.png' alt='famous' className='img-fluid' ></img>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>Smartpones</h5>
              <h6 className='text-dark'>Iphone 14 Pro Max</h6>
              <p className='text-dark'>From $999 or $16.99/mo for 25 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-3.jpg' alt='famous' className='img-fluid' ></img>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>home speakers</h5>
              <h6 className='text-dark'>Beats Phill+ Speakers</h6>
              <p className='text-dark'>From $399 or $16.99/mo for 25 mo.</p>
              </div>
            </div>
          </div>
        </div>
     </Container>
    
    {/* Special Products Section*/}
    <Container class1='special-wrapper py-5 home-wrapper-2'>
    <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row '>
          <SpecialProduct/>
          <SpecialProduct/>
          
        </div>
    </Container>
    

     {/*  Popular Products Section*/}
     <Container class1='popular-wrapper py-5 home-wrapper-2'>
     <div className='row'>
                <div className='col-12'>
                    <h3 className='section-heading'>Our Popular Products</h3>
                </div>
                <ProductCard/>
              
            </div>
     </Container>
     

    {/*  Brands Section*/}
    <Brand/>

    {/*  Bog Section*/}
    <Blog/>
    </>
  )
}

export default Home