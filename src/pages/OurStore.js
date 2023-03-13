import React, { useState } from 'react'
import BreadCrum from '../componets/BreadCrum'
import ReactStars from "react-rating-stars-component";
import Meta from '../componets/Meta'
import ProductCard from '../componets/ProductCard';
import Colors from '../componets/colors';
import Container from '../componets/Container';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    const gridSetter = (i) => {
        setGrid(i);
    };
  return (
    <>
    <Meta title={"Our Store"}/>
    <BreadCrum title="Our Store"/>
    <Container class1='store-wrapper home-wrapper-2 py-5'>
    <div className='row'>
                <div className='col-3'>
                   <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Shop By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                            <li>Smartphones</li>
                            <li>Ipad</li>
                        </ul>
                    </div>
                   </div>
                   <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Filter By</h3>
                    <div>
                        {/*========Availability=========== */}
                        <h5 className='sub-title'>Availability</h5>
                        <div >
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" value="" id="">
                            </input>
                            <label className='form-check-label' htmlFor="">In Stock [{1}]</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" value="" id="">
                            </input>
                            <label className='form-check-label' htmlFor="">Out of Stock [{0}]</label>
                        </div>
                        </div>
                        {/*========Prices=========== */}
                        <h5 className='sub-title'>Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                             <label htmlFor="floatingInput">$&nbsp;From</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput1" placeholder="To"/>
                             <label htmlFor="floatingInput1">$&nbsp;To</label>
                        </div>
                        </div>
                        {/*========Colors=========== */}
                        <h5 className='sub-title'>Colors</h5>
                            <div>
                                <Colors/>
                            </div>
                        {/*========Size=========== */}
                        <h5 className='sub-title'>Size</h5>
                        <div>
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" value="" id="size-1">
                            </input>
                            <label className='form-check-label' htmlFor="size-1">S [{2}]</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" value="" id="size-2">
                            </input>
                            <label className='form-check-label' htmlFor="size-2">M [{2}]</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" value="" id="size-3">
                            </input>
                            <label className='form-check-label' htmlFor="size-3">L [{2}]</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" value="" id="size-4">
                            </input>
                            <label className='form-check-label' htmlFor="size-4">XL [{2}]</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type="checkbox" value="" id="size-5">
                            </input>
                            <label className='form-check-label' htmlFor="size-5">XXL [{2}]</label>
                        </div>
                        </div>
                    </div>
                   </div>
                   {/*========Product Tags=========== */}
                   <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Product Tags</h3>
                    <div>
                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                            Headphone
                        </span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                            Laptop
                        </span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                            Ipad
                        </span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                            Smartphones
                        </span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                            Ipad
                        </span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                            Watch
                        </span>
                        </div>
                    </div>
                   </div>
                   {/*========Random Products=========== */}
                   <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Random Products</h3>
                    <div>
                        <div className='random-products mb-3 d-flex'>
                            <div className='w-50'>
                                <img src='images/headphone.jpg' className='img-fluid' />
                            </div>
                            <div className='w-50'>
                                <h5>Kids headphones bulk 10 pack multicolors for students.</h5>
                                <ReactStars
                                    count={5}
                                     value={3}
                                    size={24}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <strong>$300</strong>
                            </div>
                        </div>

                        <div className='random-products  d-flex'>
                            <div className='w-50'>
                                <img src='images/headphone.jpg' className='img-fluid' />
                            </div>
                            <div className='w-50'>
                                <h5>Kids headphones bulk 10 pack multicolors for students.</h5>
                                <ReactStars
                                    count={5}
                                     value={3}
                                    size={24}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <strong>$300</strong>
                            </div>
                        </div>
                    </div>
                   </div> 
                </div>
                <div className='col-9'>
                    {/*----------------Filter, Sort by & Grids------------- */}
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0 d-block ' style={{width:"100px"}}>Sort By:</p>
                            <select name='' className='form-control form-select' id=''>
                                <option value={"manual"}>Featured</option>
                                <option value={"best-selling"} selected="selected">Best Selling</option>
                                <option value={"title-ascending"}>Alphabetically, A - Z</option>
                                <option value={"title-descending"}>Alphabetically, Z- A</option>
                                <option value={"price-ascending"}>Price, low to high</option>
                                <option value={"price-descending"}>Price, high to low</option>
                                <option value={"created-ascending"}>Date, old to new</option>
                                <option value={"created-descending"}>Date, new to old</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='totalproducts mb-0'>21 Products</p>
                            <div className='d-flex gap-10 align-items-center grid'> 
                                <img src='images/gr4.svg' onClick={() => {setGrid(3);}} className='d-block img-fluid' alt='grid'/>
                                <img src='images/gr3.svg' onClick={() => {setGrid(4);}} className='d-block img-fluid' alt='grid'/>
                                <img src='images/gr2.svg' onClick={() => {setGrid(6);}} className='d-block img-fluid' alt='grid'/>
                                <img src='images/gr.svg' onClick={() => {setGrid(12);}} className='d-block img-fluid' alt='grid'/>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*----------------Products Lists------------- */}
                    <div className='products-list pb-5'>
                        <div className='d-flex flex-wrap gap-10'>
                            <ProductCard grid={grid}/>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default OurStore