import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-2 px-5 fixed top-0 left-0 right-0  bg-white/10 shadow-xl'>
        <div className=' w-16'>
            <img src="/logo/WongRyantTourLogo.png" alt="WongRyantTourLogo" />
        </div>
        <div className='w-1/2 flex justify-between font-semibold'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink>Destination</NavLink>
            <NavLink>Service</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Tour Package</NavLink>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
        </div>
        <div className='flex justify-between gap-5'>
            <div>Theme</div>
            <div>En</div>
        </div>
    </nav>
  )
}

export default Navbar