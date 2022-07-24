import React from 'react'
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className='box mb-5'>
    <nav className="sm:h-[65px] sm:px-[136px] h-[40px] w-full px-[16px] shadow-md duration-[1s] flex items-center justify-between">
        <div className="box" to="/">
        <Link
              to="/">
              <img src="/Imgs/second-hand-logo2.png" alt="Logo" className="md:block hidden mt-2 w-18 h-10 lg:mt-0"/>
            </Link>
          </div>
        <p className="text-base font-medium ">Lengkapi Info Akun</p>
        <div className="sm:w-[100px] w-[24px]" />
      </nav>
    </div>


  )
}

export default NavigationBar