import React from 'react'
import './Featured.css'
import Featured1 from './Imgs/featured1 1.svg'
import Featured2 from './Imgs/featured2.svg'
import Featured3 from './Imgs/featured3.svg'
import { Link } from 'react-router-dom'
const Featured = () => {
  return (
    <div className='featured mt-5 ' id='featured'>
        <div className='container'>
            <div className='contain-featured'>
                <div>
                    <hr className='line'/>
                    <h1>Featured</h1>
                </div>
                <div className='contain-card '>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                    
                    <Link >
                    <div className='card'>
                        <div className='sale-tag'>Sale</div>
                        <div className='card-content'>
                            <img src={Featured1} alt='#'/>
                            <h5>JazzMaster</h5>
                            <h6>$1050</h6>
                            <button className='btn add-cart-btn'>ADD TO CARD</button>
                        </div>
                    </div>
                    </Link>
                    
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                    <Link >
                    <div className='card'>
                        <div className='sale-tag'>Sale</div>
                        <div className='card-content'>
                            <img src={Featured2} alt='#'/>
                            <h5>ignersoll</h5>
                            <h6>$250</h6>
                            <button className='btn add-cart-btn'>ADD TO CARD</button>
                        </div>
                    </div>
                    </Link>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-12'>
                    <Link >
                    <div className='card'>
                        <div className='sale-tag'>Sale</div>
                        <div className='card-content'>
                            <img src={Featured3} alt='#'/>
                            <h5>rosegold</h5>
                            <h6>$890</h6>
                            <button className='btn add-cart-btn'>ADD TO CARD</button>
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
