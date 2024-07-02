import React, { useState } from 'react'
import './ShowLogin.css'
const ShowLogin = ({setShowLogin}) => {
    const [signUp,setSignUp]=useState(false)
  return (
    <>
    <div id="login-form">
    <div className='show-login'>
    <div className="form-header">  <h2>Login Form</h2><button className='close-btn' onClick={()=>setShowLogin(false)}>x</button></div> 
    <div className="form-buttons">

      <button className={`${signUp?'':'active-btn'}`} onClick={()=>setSignUp(false)} >Login</button>
      <button className={`${signUp?"active-btn":''}`} onClick={()=>setSignUp(true)} >Sign Up</button>
      </div>
      <div className="input-boxes">
        {signUp?<>
        <input type="text" placeholder='Type your Name' />
         <input placeholder='Type your Email' type="email"  /><input placeholder='Type strong Password' type="password" />

            </>:<><input placeholder='Type your Email' type="email"  /><input placeholder='Type your Password' type="password" /> </>}
       
      </div>
      {signUp?<><button className='login-btn'>Sign Up</button> <p>Already have an account <a href="" onClick={(e)=>{ e.preventDefault() ;setSignUp(false)}}>Login Now</a></p></>:<><button className='login-btn'>Login</button>
        <p>create an account <a href="" onClick={(e)=>{ e.preventDefault() ;setSignUp(true)}}>Signup Now</a></p></>}
      
      
    </div>
    </div>
    </>
  )

}

export default ShowLogin
