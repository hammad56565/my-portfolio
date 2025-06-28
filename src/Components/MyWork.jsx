import React from 'react'
import Title from './Title'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id='work' className='flex flex-col gap-20  items-center justify-center'>
      <Title text={'My latest work'} />
            <div className="grid   grid-cols-3  gap-[30px] mb-[50px] w-full">

      {mywork_data.map((services,index)=>{
                return <div key={index} className=' w-full min-w-0 gap-[10px]   rounded-[10px] cursor-pointer transition duration-300 transform hover:scale-103 hover:border-4 hover:border-[#ff00ff]     '>
                        <img src={services.w_img} alt="" />
                </div>
      })
      
    }
    </div>
    {/* Show more btn  */}
    <div className="flex px-10 py-5 font-medium border border-white  text-xl mb-5 gap-2.5 rounded-full transition-all duration-600 cursor-pointer hover:gap-[30px] ">
        <p>Show More</p>
                        <img src={arrow_icon} className='w-' />
        
    </div>
 
    </div>
  )
}

export default MyWork
