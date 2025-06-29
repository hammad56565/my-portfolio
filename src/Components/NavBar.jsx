import React, { useState } from 'react'
// import  { assets } from "../../assets/admin_assets/assets"
import  logo from "../assets/logo.svg"
import  underline from "../assets/nav_underline.svg" 
import  menuimg from "../assets/menu_open.svg" 
import  menuclose from "../assets/menu_close.svg" 
// import   '../Navbar/navbar.css'

const NavBar = () => {
  const [menu,setMenu] = useState('home')
  const [mblClose,setMblClose] = useState('hidden')
  
  return (
    <div className="z-0"> 
    {/* DESKTOP MENU  */}
    <div className='bg-[#161513] hidden md:flex  flex mx-[10%] my-[20px] items-center justify-between'>
      <div className="flex relative">
        <h1 className='font-bold z-2'>HAMMAD</h1>
       <img src={underline} className='absolute top-3 z-0 left-11' alt="" />

      </div>
       <ul className='flex text-white outfit-font text-base gap-10 items-center '>                   
       <li className='flex flex-col items-center'><a href="#home"  onClick={()=>setMenu('home')} >Home  {menu === 'home' ? <img src={underline} alt="" /> : ''}  </a> </li>
        <li><a className='flex flex-col items-center' href="#about" onClick={()=>setMenu('about')} >About me {menu === 'about' ? <img src={underline} alt="" /> : ''}   </a> </li>
        <li><a className='flex flex-col items-center' href="#service" onClick={()=>setMenu('service')} >Service {menu === 'service' ? <img src={underline} alt="" /> : ''}   </a> </li>
        <li  ><a href="#work" className='flex flex-col items-center ' onClick={()=>setMenu('work')} >Porfolio {menu === 'work' ? <img src={underline} alt="" /> : ''}   </a> </li>
        <li><a className='flex flex-col items-center' href="#contact" onClick={()=>setMenu('contact')} >Contact {menu === 'contact' ? <img src={underline} alt="" /> : ''}   </a> </li>
       </ul>
      <a className='flex flex-col items-center' href="#contact"   > <button className='text-white rounded-full cursor-pointer transition duration-500 transform hover:scale-105 px-[20px] py-[15px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]'>Contact With Me</button> <a/>
          </a>
    </div>
    {/* MOBILE MENU  */}
     <div className='bg-[#161513] md:hidden flex flex-col w-full max-sm:w- my-[20px] items-center justify-between'>
      <div className="flex justify-between w-full relative">
        <div className="flex relative">
        <h1 className='font-bold z-2'>HAMMAD</h1>
       <img src={underline} className='absolute top-3 z-0 left-11' alt="" />

      </div>
      <img onClick={()=>setMblClose('fixed')}  src={menuimg} alt="" />
       </div>
       <div className={` z-50 fixed ${mblClose === 'hidden' ? 'hidden' : 'fixed'} top-0 right-0 w-[80%] bg-[rgb(31,_0,_22)] justify-end `}>
        <img onClick={()=>setMblClose('hidden')} src={menuclose} alt="" className='top-[30px] right-[40px] w-[30px] absolute ' />
          <ul  className='flex flex-col top-[25px]  mt-20 mb-15 text-white outfit-font text-base pl-[50px] gap-[30px] items-start '>                   
       <li ><a className='flex  flex-row gap-5 items-center' href="#home"  onClick={()=>setMenu('home')} >Home  {menu === 'home' ? <img src={underline} alt="" /> : ''}  </a> </li>
        <li><a className='flex  flex-row gap-5 items-center' href="#about" onClick={()=>setMenu('about')} >About me {menu === 'about' ? <img src={underline} alt="" /> : ''}   </a> </li>
        <li><a className='flex  flex-row gap-5 items-center' href="#service" onClick={()=>setMenu('service')} >Service {menu === 'service' ? <img src={underline} alt="" /> : ''}   </a> </li>
        <li  ><a href="#work" className='flex  flex-row gap-5 items-center ' onClick={()=>setMenu('work')} >Porfolio {menu === 'work' ? <img src={underline} alt="" /> : ''}   </a> </li>
        <li><a className='flex  flex-row gap-5 items-center' href="#contact" onClick={()=>setMenu('contact')} >Contact {menu === 'contact' ? <img src={underline} alt="" /> : ''}   </a> </li>
       </ul>
       </div>

       </div>
    <div className="">
      <img src="/portfolio/assets/profile_img-isMTF2gD.svg" alt="" />
    </div>
    </div>
  )
}

export default NavBar
