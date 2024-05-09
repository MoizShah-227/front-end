import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './Imgs/Logo header.svg';
import bag from './Imgs/bx-shopping-bag.svg.svg';
import sun from './Imgs/bx-sun.svg.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggle button

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle state on click
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='contain-nav'>
          <div className='leftside'>
            <img src={logo} alt="Logo" />
            <ul className={isOpen ? 'show' : ''}> {/* Toggle visibility based on state */}
              <li><Link to="/">Home</Link></li>
              <li><a href="#featured">Featured</a></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/new">New</Link></li>
            </ul>
          </div>

          <div className='rightside'>
            <div>
              <ul>
                <li><button><i class="bi bi-person-circle"></i></button></li>
                <li><button><i class="bi bi-bag"></i></button></li>
              </ul>
            </div>
          </div>
             <button className='menu-toggle' onClick={toggleMenu}>
            <i class={isOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i> 
            </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
