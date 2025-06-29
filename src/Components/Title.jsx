import React, { useState } from 'react'
import  theme_pattern from "../assets/theme_pattern.svg"


const Title = ({text}) => {
    
   return (
    <div className='relative'>
      <h1 className='relative z-10 font-medium gap-15 text-[40px] md:text-[60px] max-sm:p-0 px-[30px]'>{text}</h1>
      <img src={theme_pattern} className='absolute md:top-4 top-2 right-[65px] md:left-35 bottom-15 z-0' alt="" />
    </div> 
  )
}

export default Title
