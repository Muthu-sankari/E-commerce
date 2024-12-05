import React from 'react'
import './CSS/LoginSignUp.css'

const Login = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='Password'></input>

        </div>
     
      <button>Continue</button>
     
      <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
      <div className="loginsignup-agree">
      <input type='checkbox' name='' id=''></input>
      <p>By continuing,i agree to the terms of use and privacy policy.</p>
      </div>
    </div>
    </div>
  )
}

export default Login