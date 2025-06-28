import React, { useState } from 'react'
// import  { assets } from "../../assets/admin_assets/assets"
import  logo from "../assets/logo.svg"
import  underline from "../assets/nav_underline.svg" 
// import   '../Navbar/navbar.css'

const NavBar = () => {
  const [menu,setMenu] = useState('home')
  return (
    <div className=""> 
    <div className='bg-[#161513] flex mx-[10%] my-[20px] items-center justify-between'>
       <img src={logo} alt="" />
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
    <div className="">
      <img src="/portfolio/assets/profile_img-isMTF2gD.svg" alt="" />
    </div>
    </div>
  )
}

export default NavBar
