import React from 'react'
import Title from './Title'
import service_data from '../assets/services_data'
import arrow_icon from '../assets/arrow_icon.svg'

const MyServices = () => {
  return (
    <div id='service' className='md:items-center justify-center flex flex-col gap-20 mb-[20px] md:my-[70px]'>
      <Title  text={'My Services'} />
      <div className="grid  grid-cols-2  md:grid-cols-3 gap-[20px] md:gap-[30px] mb-[50px] w-[90%] md:w-full">
      {service_data.map((services,index)=>{
          return <div key={index} className='flex flex-col grow w-full min-w-0 gap-[10px] p-[20px] md:p-[30px] border-2 border-white rounded-[10px] cursor-pointer transition duration-400 transform hover:border-[#ff00ff] hover:scale-105  hover:bg-[linear-gradient(45deg,_#3f0028,_#582300)] '>
                   <h1 className="font-semibold text-[22px] ">{services.s_no} </h1>
                   <h2 className=" bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent font-extrabold text-[20px] md:text-[30px] ">{services.s_name} </h2>
            
         <p className="text-[#d4d4d4] md:text-xl text-base  max-w-[280px] w-full  leading-[30px] ">{services.s_desc} </p>
            <div className="flex gap-[10px]  items-center mt-5 ">
                <p className='text-[#d4d4d4] text-base md:text-xl'>Read More</p>
                <img src={arrow_icon} className='w-5' />
            </div>
          </div>
      })

      }
    </div>
    </div>
  )
}

export default MyServices
