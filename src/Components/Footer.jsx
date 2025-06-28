import React from 'react'
import  logo from "../assets/logo.svg"
import  user from "../assets/user_icon.svg"


const Footer = () => {
  return (
    <div className='flex flex-col gap-[25px] my-12.5 '>
      <div className="flex justify-between">
        <div className="fle flex-col">
            <img src={logo} alt="" />
            <p className="text-base max-w-[450px]">I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
        </div>
        <div className="flex gap-[15px] items-center">
            <div className="flex bg-[#32323c] text-lg   rounded-full  items-center w-full py-[15px] px-5  text-[#a0a0a0] ">
                <img src={user} alt="" className='w-7 h-7' />
                         <input className='bg-[#32323c] outline-none   w-full ' type="email" name='email' placeholder='Enter your email' />

            </div>
                        <button type='submit' className='text-white rounded-[50px] cursor-pointer  transition duration-300  hover:scale-104 px-[35px] py-4  text-lg  bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]'>Subscribe</button>

        </div>
      </div>
    </div>
  )
}

export default Footer
