import React, { useContext, useState } from 'react'
import { assets } from '../../images/frontend_assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ContexApi } from '../../ContexApi/ContexApi'
import Footer from '../Footer/Footer'
function Navbar({showLogin,setShowLogin,menu}) {
  const foodList= useContext(ContexApi)
  const hasQuantity = foodList.foodList.some(item=> item.quantity>0)
 const [showMenu,setShowMenu]=useState(false)
  return (
    <>
    <nav id='navbar' className='container'>
        <div className="logo">
           <Link to='/'> <img src={assets.logo} alt="" /></Link>
        </div>
        {menu?<div className="nav-menu">
            <ul className={`nav-list ${showMenu?'show-menu':''}`}>
                <li>  <Link to="/"> Home</Link></li>
                <li><a href="#explore-menu"> Menu</a></li>
                <li><a href="#display-list"> Food lists </a></li>
                <li><a href="#footer"> Contact us</a></li>
            </ul>
        </div>:<></>}
        
        <div className="nav-right">
           
          <Link to='/cards'> <img src={assets.basket_icon} alt="" /> <div className={`${hasQuantity&& "dot"}`}></div> </Link>
            <button onClick={()=>setShowLogin(true)} className='btn'>Sign in</button>
        </div>
        {menu? <div onClick={()=>setShowMenu(prev=> prev?false:true)} className={`burger ${showMenu?'burgerfix':''}`}><i className="fa-solid fa-bars"></i></div>:<></>}
       
    </nav>
      
    </>
  )
}

export default Navbar
