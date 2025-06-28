import React, { useState } from 'react'
import  theme_pattern from "../assets/theme_pattern.svg"


const Title = ({text}) => {
    
   return (
    <div className='relative'>
      <h1 className='relative z-10 font-medium gap-15 text-[60px] px-[30px]'>{text}</h1>
      <img src={theme_pattern} className='absolute top-4 left-35 bottom-15 z-0' alt="" />
    </div> 
  )
}

export default Title
