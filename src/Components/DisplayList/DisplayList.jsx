import React, { useContext, useEffect, useState } from 'react'
import './DisplayList.css'
import { assets } from '../../images/frontend_assets/assets'
import { ContexApi } from '../../ContexApi/ContexApi'
function DisplayList({category}) {
 
  const {food_list,foodList,setFoodList} = useContext(ContexApi)
 

  useEffect(() => {
    setFoodList(foodList);
  }, [foodList]);

  return (
   
    <section id='display-list' className='container'>
        <h2>Top dishes near you</h2>
        <div className="food-item-lists">
         
{foodList.map((item,index)=>{
   if(category==="All"||category===item.category){
return(
     
    <div className='food-item' key={index}>
      
        <img className='card-img' src={item.image} alt="" />
        <div className="name-rating">
           <p> {item.name}</p> <img src={assets.rating_starts} alt="" />
        </div>
        <p className='description'>{item.description}</p>
        <div className='price'> <p>${item.price}</p> 
        <div className="add-remove-btn">
          {
          !item.quantity?
          <img onClick={()=> setFoodList(prev => prev.map((item, i) => 
            i === index ? { ...item, quantity: (item.quantity || 0) + 1 } : item
          ))} 
          src={assets.add_icon_white} alt="" />:
           <><img onClick={()=> setFoodList(prev => prev.map((item, i) => 
            i === index ? { ...item, quantity: (item.quantity || 0) + 1 } : item
          ))} src={assets.add_icon_green} alt="" /> 
           <p>{item.quantity} </p>
           <img  onClick={()=> setFoodList(prev => prev.map((item, i) => 
            i === index ? { ...item, quantity: (item.quantity || 0) - 1 } : item
          ))}  src={assets.remove_icon_red} alt="" />
           </>
           }

           </div> 
           </div>


    </div>
    
)   
   }
})}
</div>
     
    </section>
  )
}

export default DisplayList
