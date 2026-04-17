import React from 'react'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import Home from "./page/Home"
import LiveChat from "./page/LiveChat"
import Login from "./auth/Login"
import Signup from "./auth/signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/livechat" element={<LiveChat/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


const Root = ()=>{

  const isAuth = !!localStorage.getItem("token");

  isAuth? (
    Navigate("/Home")
  ) : (
    Navigate("/livechat")
  )
}