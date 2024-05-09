import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import heroImg from './Imgs/Home img.svg'
const Home = () => {
    
  return (
    <div className='home'>
        <div className='container'>
          <div className='contain-home'>
            <div className='row '>
              <div className='col-6 col-md-6 col-sm-12  right-side '>
                <div className='tag-lines'>
                <div className='side-social'>
                  <ul>
                    <li><Link>Facebook</Link></li>
                    <li><Link>Twitter</Link></li>
                    <li><Link>Instagram</Link></li>
                  </ul>
                </div>
                  <h1>NEW WATCH<br/>COLLECTION B720</h1>
                  <p>Latest arrival of new imported watches of the B720 series, with a modern and resistant design</p>
                  <h4>$1245</h4>
                  <button className='btn discover-btn'>Discover</button>
                  <button className='btn add-btn'>ADD TO CART</button>
                </div>
  
              </div>
              <div className='col-6 col-md-6 col-sm-12 left-side'>
                <img src={heroImg} alt='#'/>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Home
