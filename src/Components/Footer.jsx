import React from 'react'
import  logo from "../assets/logo.svg"
import  user from "../assets/user_icon.svg"
import  underline from "../assets/nav_underline.svg" 



const Footer = () => {
  return (
    <div className='flex flex-col gap-[25px] max-sm:w-[90%] md: my-12.5 '>
      <div className="flex  max-md:flex-col max-md:gap-5 justify-between">
        {/* footer  left  */}
        <div className="fle flex-col">
              <div className="flex relative">
                    <h1 className='font-bold z-2'>HAMMAD</h1>
                   <img src={underline} className='absolute top-3 z-0 left-11' alt="" />
            
                  </div>
            <p className="text-base  w-[90%] md:max-w-[450px]">I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
        </div>
        <div className="flex gap-[15px] md:items-center">
            <div className="flex bg-[#32323c] text-lg   rounded-full  items-center  w-[50%]  md:w-full px-[14px] py-[12px] md:py-[15px] md:px-5  text-[#a0a0a0] ">
               
                <img src={user} alt="" className='w-7 h-7 max-sm:hidden' />
                         <input className='bg-[#32323c] outline-none    w-[90%]  md:w-full  ' type="email" name='email' placeholder='Enter your email' />

            </div>
       <button type='submit' className='text-white rounded-[50px] cursor-pointer  transition duration-300  hover:scale-104 px-5 md:px-[35px] md:py-4 py-[14px]  text-sm md:text-lg  bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]'>Subscribe</button>

        </div>
      </div>
    </div>
  )
}

export default Footer
