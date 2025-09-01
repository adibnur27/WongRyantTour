import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home/Home'
import AboutUs from '../page/AboutUs/AboutUs'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home  />}/>
            <Route path='/aboutUs' element={<AboutUs  />}/>
        </Routes>
    </>
  )
}

export default AppRoutes