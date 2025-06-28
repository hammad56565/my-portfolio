import React from 'react'
import  profile_img from "../assets/profile_img.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  // const notify = () => toast.error("🎉 Wow so easy!"); 
  return (
    <div className='flex items-center flex-col gap-5' id='home'>
         <img src={profile_img} alt="" />
         <h1 className='font-semibold text-[65px] w-[65%] text-center '><span className=' bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent'>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
   <p className="text-lg w-1/2 text-center">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="flex gap-[25px] font-medium mb-[50px]">

           <button       className='text-white rounded-[50px] cursor-pointer   hover:border-[2px]  border-solid-[#fff] px-[30px] py-[20px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]'>Contact With Me</button>
           <button className='text-white rounded-[50px] cursor-pointer   hover:border-[#aa00cf]  border-[2px] border-solid-[#fff] px-[30px] py-[20px] bg-black'>Contact With Me</button>
        </div>

    </div>
  )
}

export default Hero
