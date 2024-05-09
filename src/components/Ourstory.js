import React from 'react'
import './Ourstory.css'
import storyimg from './Imgs/story 1.svg'
const Ourstory = () => {
  return (
    <div className='ourstory mt-4'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 left-side'>
                <div className='bg-container'>
                    <img src={storyimg} alt='#'/>
                </div>
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12 right-side'>
                <hr/>
                <h5>OUR STORY</h5>
                <h2>Inspirational Watch of<br/> 
                    this year</h2>
                <p>The latest and modern watches of this year, is available in various presentations in this store, discover them now.</p>
                <button className='btn'>
                Discover
                </button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Ourstory
