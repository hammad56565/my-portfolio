import React from 'react'
import Title from './Title'
import  about_profile from "../assets/about_profile.jpg"



const About = () => {
  return (
    <div id='about' className='flex flex-col md:justify-center md:items-center gap-15 mb-[20px] md:my-[70px] '>
      <Title text={'About me'} className="p-0" />
      <div className="flex gap-15 ">  
        <img src={about_profile} className='md:w-[350px] md:block hidden  ' />
        
        {/* About Right  */}
        <div className="md:w-3/5 w-[90%] flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[15px] text-lg font-medium">
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
             <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            {/* Skills  */}
            <div className="flex flex-col gap-5">
                <div className="flex transition duration-500 transform hover:scale-105 items-center gap-5">
                    <h1>HTML & CSS</h1>
                    <hr className='border-none outline-none w-1/2  h-2 rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]' />
                </div>
                <div className="flex transition duration-500 transform hover:scale-105 items-center gap-5">
                    <h1>REACT JS</h1>
                    <hr className='border-none outline-none w-1/2  h-2 rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]' />
                </div>
                <div className="flex transition duration-500 transform hover:scale-105 items-center gap-5">
                    <h1>JAVASCRIPT</h1>
                    <hr className='border-none outline-none w-1/2  h-2 rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]' />
                </div>
                <div className="flex transition duration-500 transform hover:scale-105 items-center gap-5">
                    <h1>TAILWIND</h1>
                    <hr className='border-none outline-none w-1/2  h-2 rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]' />
                </div>
            </div>
        </div>
      </div>
      {/* ABOUT ACHIEVMENTS  */}
      <div className="flex justify-around mb-[50px] w-[90%] md:w-full">
           {/* no 1  */}
           <div className="flex flex-col items-center">
            <h1 className='font-bold text-[28px] md:text-[40px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent'>10+</h1>
              <p className='text-lg text-center text-sm font-medium'>Years Of Experience</p>
           </div>
           <div className='bg-white h-auto w-[1px]'  />
           {/* no 1  */}
           <div className="flex flex-col items-center">
            <h1 className='font-bold text-[28px] md:text-[40px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent'>90+</h1>
              <p className='text-lg text-center text-sm font-medium'> PROJECTS COMPLETED</p>
           </div>
           <div className='bg-white h-auto w-[1px]'  />
           {/* no 1  */}
           <div className="flex flex-col items-center">
            <h1 className='font-bold text-[28px] md:text-[40px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent'>15+</h1>
              <p className='text-lg text-center text-sm font-medium'>HAPPY CLIENTS</p>
           </div> 
      </div>
    </div>
  )
}

export default About
