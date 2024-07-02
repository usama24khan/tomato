import React,{useStatet} from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../images/frontend_assets/assets'
import { useState } from "react"
function ExploreMenu({category,setCategory}) {
  
  const categoryHandler=(name)=>{
    category===name?setCategory("All"):setCategory(name); 
  }
  return (
    <section id='explore-menu' className='container'>
        <h2>Explore our menu</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae expedita dignissimos consectetur quos. Aliquam amet velit, earum provident dolorem deserunt nemo, </p>
        <div className="menu-list">
            {menu_list.map((manu,index)=>{
               return(
          <div onClick={()=>categoryHandler(manu.menu_name)} className='menu'  key={index}><img className={`${category===manu.menu_name?"active":""}`} src={manu.menu_image} alt="" />
                <p>{manu.menu_name}</p>  </div>

               )
            })}
        </div>
        <hr />
      
    </section>
  )
}

export default ExploreMenu
