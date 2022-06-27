import React from 'react'

const NavigationBar = () => {
  return (
    <div>
    <nav className="sm:h-[84px] sm:px-[136px] h-[52px] w-full px-[16px] shadow-md duration-[1s] flex items-center justify-between">
        <div className="sm:hidden" to="/">
          <img src='' alt="img" />
        </div>
        <a
              href="#"
              className="shadow-md md:block hidden mt-2 w-28 h-8 bg-purple-700 hover:bg-purple-200 lg:mt-0"
            ></a>
        <p className="text-base font-medium leading-6 ">Lengkapi Info Akun</p>
        <div className="sm:w-[100px] w-[24px]" />
      </nav>
    </div>
  )
}

export default NavigationBar