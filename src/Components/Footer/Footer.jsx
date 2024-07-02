import React from 'react'
import './Footer.css'
import { assets } from '../../images/frontend_assets/assets'
function Footer() {
  return (
    <div id='footer'>
        <div className="about">
            <img className='logo' src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet cquam voluptates distinctio amet, officia corporis eligendi culpa eos consequatur fuga. Obcaecati illo similique atque ea sit, aut ullam.</p>
            <div className="links">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-menu">
        <h2>COMPANY</h2>
        <ul className='page-list'>
            <li><a href="/"> Home</a></li>
            <li><a href="#explore-menu"> Menu</a></li>
            <li><a href="#display-list">Food available</a></li>
        </ul>
        </div>
        <div className="footer-contact">
            <h2>GET IN TOUCH</h2>
            <p><i className="fa-solid fa-phone"></i> +12345678908</p>
            <p><i className="fa-solid fa-globe"></i> food-delivery.com</p>
        </div>
      
    </div>
  )
}

export default Footer
