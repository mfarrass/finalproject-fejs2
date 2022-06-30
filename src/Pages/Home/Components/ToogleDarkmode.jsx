import React from 'react'
import UseDarkMode from "../../../Hooks/UseDarkMode";
import { BsFillMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import './toogle.css'


const ToogleDarkmode = () => {
    const [setTheme, colorTheme] = UseDarkMode()

  return (
    <div>
    <input type="checkbox" class="checkbox" id="checkbox" onClick={() => setTheme(colorTheme)} />
  <label for="checkbox" class="label">
  <BsSunFill className='fa-color' />
   <BsFillMoonFill className='fa-color'/>
    <div class='ball' />
  </label>
</div>
  )
}

export default ToogleDarkmode