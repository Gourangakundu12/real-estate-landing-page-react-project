import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-11/12 mx-auto  py-4 ' >
        <div className='flex justify-between items-center ' >
          {/* logo */}
          <div>
            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385189/logo_utajox.png" alt="" />
          </div>
          {/* navmenu */}
          <div>
            <nav>
              <ul className='flex justify-center items-center gap-4 text-[#0F0E0E] font-semibold ' >
                <li> <NavLink to={"/"} > Home </NavLink> </li>
                <li> <NavLink to={"/"} > About </NavLink> </li>
                <li> <NavLink to={"/"} > Blog </NavLink> </li>
                <li> <NavLink to={"/"} > Properties </NavLink> </li>
              </ul>
            </nav>
          </div>
          {/* contact button */}
          <div>
            <button className='flex items-center gap-2 border-2 border-[#FF5B28] px-2 py-2 ' >
              Contact Us
              <span>
                <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385450/Vector_qbkpq8.png" alt="" />
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Header
