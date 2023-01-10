import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'

function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={<Login/>}></Route>
                {/* <Route path='*' element={<h3>oops page not fount !!</h3>}></Route> */}
                {/* <Route path='*' element={<Navigate to="/"></Navigate>}></Route> */}
            </Routes>
        </BrowserRouter>
    </>
    
  )
}

export default Routing