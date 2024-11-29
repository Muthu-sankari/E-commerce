import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assests/logo.png';
import cart from'../Assests/cart.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu,setMenu]=useState("shop");
  return (
    <div className='Nav'> 
    <div className='Nav-logo'>
      <img src={Logo} alt=''></img>
      <p>SHOPPER</p>
    </div>
    <ul className='Nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{ menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}}  to='/mens'>Men</Link>{ menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>{ menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{ menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className="Nav-login-cart">
     <Link to='/login'> <button>Login</button></Link>
      <Link to='/cart'><img src={cart} alt=''></img ></Link>
      <div className="Nav-cart-count">0</div>
    </div>
    </div>
  )
}

export default Navbar