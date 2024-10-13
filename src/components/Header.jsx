import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function Header() {
   //which reducer:all cart
   const {cart}= useSelector((state)=>state.allCart)
   console.log(cart)

  return (
     <Navbar style={{background:'black' , color:'white' , height:'80px'}}>
        <Container>
          <h3 className='text-light '>Ecommerce</h3>
          <NavLink to='/cart' className='text-decoration-none text-light mx-2'>
          <div id='ex4'> 
            <span className='p1 fa-stack fa-2x has-badge' data-count={cart.length} >
            <FontAwesomeIcon icon={faCartShopping}  />
            </span>
          </div>
          </NavLink>
        </Container>
      </Navbar>
  )
}

export default Header