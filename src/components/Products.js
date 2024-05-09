import React from 'react'
import './Products.css';
import { Link } from 'react-router-dom';
import pro1 from './Imgs/product1.svg'
import pro2 from './Imgs/product2.svg'
import pro3 from './Imgs/product3.svg'
import pro4 from './Imgs/product4 1.svg'
import pro5 from './Imgs/product5 1.svg'
const Products = () => {

  const products = [
      {P_Name:"sprite rose",P_img:pro1,P_Price:"1500"},
      {P_Name:"Khaki pilot",P_img:pro2,P_Price:"1350"},
      {P_Name:"JublieeBlack",P_img:pro3,P_Price:"870"},
      {P_Name:"Fosil ME3",P_img:pro4,P_Price:"650"},
      {P_Name:"Duchen",P_img:pro5,P_Price:"950"},
  ]

  console.log(products.P_img);


  return (
    <div className='products'>
      <div className='container'>
        <div className='contain-products'>
          <div>
            <hr className='line'/>
            <h1>Products</h1>
          </div>
      
        <div className='contain-card'>
          <div className='row'>
          { products.map((item)=>{
            return(
                    <div className=' col col-lg-3 col-md-4 col-sm-12'>
              <Link >
                      <div className='card'>
                          <div className='card-content'>
                              <img src={item.P_img} alt='#'/>
                              <h5>{item.P_Name}</h5>
                              <h6>${item.P_Price}</h6>
                          </div>
                          <button className='shop-btn'>
                          <i class="bi bi-bag"></i>
                          </button>
                      </div>
                      </Link>
                  </div>   
                  );
                })
                }
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Products
