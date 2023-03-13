import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.jpg"
import watch2 from "../images/watch-2.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>{/*dynamic classname according to value pass from grid*/}
        <Link to={"/product/:id"} className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'>
                <img src={wish} alt='wishlist'/>
                </button>
            </div>
            <div className='product-image'>
                <img src={watch1} alt='product image' className='img-fluid'/>
                <img src={watch} alt='product image' className='img-fluid' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Gurkha</h6>
                <h5 className='product-title'>Gorkha watches directly imported from UK in multi coloured bands.</h5>
                <ReactStars
                    count={5}
                     value={3}
                     size={24}
                     edit={false}
                     activeColor="#ffd700"
                /> 
                {/* Showing description only in full grid */}
                 <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>
                    Indicators & Hands Luminous Case Material Stainless Steel Strap Material Nylon Strap. Movement Japan Quartz. Glass Sapphire Crystal Single Dome Glass. Water Resistance 100m (10 ATM). Case Diameter 41.5mm
                </p>
                {/* ---------------*/}
                <p className='price'>$100.00</p>
            </div>

            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt='compare'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt='view'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                    <Link to={'/cart'}> <img src={addcart} alt='addcart'></img></Link>
                    </button>
                </div>
            </div>
        </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to={"/"} className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt='wishlist'/>
                </button>
            </div>
            <div className='product-image'>
                <img src={watch1} alt='product image' className='img-fluid'/>
                <img src={watch} alt='product image' className='img-fluid' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Gurkha</h6>
                <h5 className='product-title'>Gorkha watches directly imported from UK in multi coloured bands.</h5>
                <ReactStars
                    count={5}
                     value={3}
                     size={24}
                     edit={false}
                     activeColor="#ffd700"
                />
                <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>
                    Indicators & Hands Luminous Case Material Stainless Steel Strap Material Nylon Strap. Movement Japan Quartz. Glass Sapphire Crystal Single Dome Glass. Water Resistance 100m (10 ATM). Case Diameter 41.5mm
                </p>
                <p className='price'>$100.00</p>
            </div>

            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt='compare'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt='view'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                    <Link to={'/cart'}> <img src={addcart} alt='addcart'></img></Link>
                    </button>
                </div>
            </div>
        </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>{/*dynamic classname according to value pass from grid*/}
        <Link to={"/"} className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt='wishlist'/>
                </button>
            </div>
            <div className='product-image'>
                <img src={watch1} alt='product image' className='img-fluid'/>
                <img src={watch} alt='product image' className='img-fluid' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Gurkha</h6>
                <h5 className='product-title'>Gorkha watches directly imported from UK in multi coloured bands.</h5>
                <ReactStars
                    count={5}
                     value={3}
                     size={24}
                     edit={false}
                     activeColor="#ffd700"
                /> 
               <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>
                    Indicators & Hands Luminous Case Material Stainless Steel Strap Material Nylon Strap. Movement Japan Quartz. Glass Sapphire Crystal Single Dome Glass. Water Resistance 100m (10 ATM). Case Diameter 41.5mm
                </p>
                <p className='price'>$100.00</p>
            </div>

            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt='compare'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt='view'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                    <Link to={'/cart'}> <img src={addcart} alt='addcart'></img></Link>
                    </button>
                </div>
            </div>
        </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to={"/"} className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt='wishlist'/>
                </button>
            </div>
            <div className='product-image'>
                <img src={watch1} alt='product image' className='img-fluid'/>
                <img src={watch} alt='product image' className='img-fluid' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Gurkha</h6>
                <h5 className='product-title'>Gorkha watches directly imported from UK in multi coloured bands.</h5>
                <ReactStars
                    count={5}
                     value={3}
                     size={24}
                     edit={false}
                     activeColor="#ffd700"
                /> 
                <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>
                    Indicators & Hands Luminous Case Material Stainless Steel Strap Material Nylon Strap. Movement Japan Quartz. Glass Sapphire Crystal Single Dome Glass. Water Resistance 100m (10 ATM). Case Diameter 41.5mm
                </p>
                <p className='price'>$100.00</p>
            </div>

            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt='compare'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt='view'></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                       <Link to={'/cart'}> <img src={addcart} alt='addcart'></img></Link>
                    </button>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard