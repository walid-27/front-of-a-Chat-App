import React from 'react'
import ".//signup.css"
import {Link} from "react-router-dom"
function Login() {
  return (
    
      <div className='signup' >
        <form className='form-signup'>
        <span class="material-symbols-outlined  logo-sign">person</span>
        <h3>Welcome Back</h3>
        <p className='p-sign'>Login and start your chating</p>
            <label >E-mail:
            <input type="text" 
            placeholder='e-mail'
            />
            </label>
            <label >
              password:
            <input type="password" 
            placeholder='password'
            />
            </label>
           
        <div className="btn-form">
          <button>Next &#x2192;</button>
          
        </div>
        <p className='log-link'> you dont't have account? <Link to="/signup"><span>Sign UP</span></Link></p>
      </form>
      </div>
    
  )
}

export default Login
