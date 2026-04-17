import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
function Home() {
  return (
    <div>
      <header className='header_home'> 
      <div className="detalis-home">
            <p className='so-title'>الجزائر. COMMUNITY</p>
            <h1>Qahwat gosto</h1>
            <p className='pr-header'>A warm corner of the internet for the Algerian community — talk, share, and connect in true qahwa spirit.</p>
          <div className="btn-home">
            <button className='explore-btn'>Explore &#x2192;</button>
            <Link to="/signup"><button className='sign-btn'>Sign up!</button></Link>
          </div>
      </div>
     </header>
    </div>
  )
}

export default Home
