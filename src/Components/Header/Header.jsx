import React from 'react'
import './Header.css'
import { assets } from '../../images/frontend_assets/assets'
function Header() {
  return (
<header className='Header-container container'>
        <img src={assets.header_img} alt="" />
     <div className="header-content">
        <h1>Order your favourite food here</h1>
        <p>Lorem ipsum as tempore corporis nulla facere minus tenetur odio impedit placeat velit beatae.</p>
      <a href='#explore-menu'>  <button className='btn'>View Menu</button></a>
     </div>      
</header>
  )
}

export default Header
