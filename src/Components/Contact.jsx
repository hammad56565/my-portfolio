import React from 'react'
import Title from './Title'
import mail_icon from '../assets/mail_icon.svg'
import call_icon from '../assets/call_icon.svg'
import location_icon from '../assets/location_icon.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
      //  API KEY FORM 
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0f507ffc-1c5c-40d5-b01c-6280a34130f5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
       toast.success(`🎉${res.data.name.toUpperCase()} Mail Recieved`);
    }
  };


  return (
    <div id='contact' className='md:items-center justify-center  flex flex-col gap-20 max-sm:w-[90% mt-[70px] md:my-[70px]'>
      <Title text={'Get in touch'} />
      {/* Content OF Contact  */}
      <div className="flex gap-[30px] max-md:flex-col w-[90%] md:w-full justify-between ">
        {/* Left Part  */}
        <div className="flex flex-col gap-5  basis-[45%]">
            <h1 className='bg-[linear-gradient(270deg,_#DF8908_80%,_#B415FF_100%)] bg-clip-text text-transparent font-bold text-[50px]'>Let's talk</h1>
           <p className="text-[#d8d8d8] text-base max-w-[550px]">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
           <div className="text-[#d8d8d8] text-[22px] gap-[25px] flex flex-col ">
            <div className="flex items-center gap-[18px]">
                <img src={mail_icon} alt="" />
                <p className="text-[#d8d8d8] text-base max-w-[550px]">mhammad936666@gmail.com</p>
            </div>
            <div className="flex items-center gap-[18px]">
                <img src={call_icon} alt="" />
                <p className="text-[#d8d8d8] text-base max-w-[550px]">+000-000-000</p>
            </div>
            <div className="flex items-center gap-[18px]">
                <img src={location_icon} alt="" />
                <p className="text-[#d8d8d8] text-base max-w-[550px]">PK</p>
            </div>
           </div>
        </div>
        {/* RIGHT FORM  */}
        <form onSubmit={onSubmit} className="flex flex-col gap-[15px] items-start basis-[55%]">
            <label htmlFor="" className='taext[#d8d8d8] '>Name</label>
            <input className='bg-[#32323c] text-lg border-none rounded-sm  w-[90%]  md:w-full py-4.5 pl-5  text-[#a0a0a0] ' type="text" name='name' placeholder='Enter your name' />
        
            <label htmlFor="" className='taext[#d8d8d8] '>Your Email</label>
            <input className='bg-[#32323c] text-lg border-none rounded-sm  w-[90%]  md:w-full py-4.5 pl-5  text-[#a0a0a0] ' type="email" name='email' placeholder='Enter your email' />
        
            <label htmlFor="" className='taext[#d8d8d8] '>Write your message here</label>
            <textarea name="textarea" className='bg-[#32323c] text-lg border-none rounded-sm  w-[90%]  md:w-full py-4.5 pl-5  text-[#a0a0a0] ' placeholder='Enter your message' rows={8} id=""></textarea>
            {/* <input className='bg-[#32323c] text-lg border-none rounded-sm   w-full py-4.5 pl-5  text-[#a0a0a0] ' type="text" name='name' placeholder='Enter your name' /> */}
            <button type='submit' className='text-white rounded-[50px] cursor-pointer  transition duration-300  hover:scale-104 px-[30px] py-3 md:px-[40px] md:py-4.5 mt-[15px] text-lg  bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]'>Submit Now</button>

        </form>
      </div>
      
    </div>
  )
}

export default Contact
