import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import '../src/App.css'
import About from './Components/About'
import MyServices from './Components/MyServices'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer'



const App = () => {
  return (
    <div className='max-sm:mx-[5%] mx-[10%] scroll-smooth '  >
       <NavBar/>
       <Hero />
       <About/>
       <MyServices />
       <MyWork />
       <Contact />
       <Footer />
       {/* This must be included ONCE */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
