import React, { useContext,useState,useEffect }  from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';
import { ContexApi } from '../../ContexApi/ContexApi'
import { food_list } from '../../images/frontend_assets/assets';

  
function Cards() {
  
  const deliveryFee = 5
  const {food_lists,foodList,setFoodList,total,setTotal, hasQuantity} = useContext(ContexApi)
  console.log(hasQuantity)
  useEffect(() => {
     
    setFoodList(foodList);
    const newTotal = foodList.reduce((acc, item) => {
      return item.quantity > 0 ? acc + item.price * item.quantity : acc;
    }, 0);
    setTotal(newTotal);
  


  }, [foodList]);

 
  return (
    <div id='cards'>
        <h1>Card Items</h1>
        <div className="card-titles">
                <p>items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              {hasQuantity?<></>:<div className='emty-card-item'> No items in the card! <Link to='/tomato'> <button className='btn '>Add Foods</button></Link> </div>}

      {foodList.map((item,index)=>{
        if(item.quantity>0){
          
          return (
           
            <div key={index} className='card-items'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.price*item.quantity}</p>
              <p className='del-btn' onClick={()=> setFoodList(prev => prev.map((item, i) => 
            i === index ? { ...item, quantity: (item.quantity || 0) - 1 }  : item
          ))}>X</p>
              
              </div>
              
           
          )
        }
      
      })}
      <hr />
      <div className="sub-totals">
        <h2>Sub Total</h2>
        <div className="sub-total"><p>Subtotal</p> ${total}</div>
        <hr />
        <div className="sub-total"><p>Delivery Fee</p> ${deliveryFee}</div>
        <hr />
        <div className="sub-total"><p>Total</p> ${total+deliveryFee}</div>
        <hr />
        <button className='order'>Order Now</button>

      </div>
    </div>
  )
}

export default Cards
