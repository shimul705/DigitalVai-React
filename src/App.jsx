import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Code from './components/Code'
import Hex from './components/Hex'
import Wave from './animation/Wave'

// Navigation
import Nav from './components/Nav'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='bg-gradient-to-br from-[#00AEEF] to-[#262262]'> */}
      <div className=''>
        <Nav></Nav>
        <Header></Header>



        {/* Our Tech Wizards Section  -gradient-to-b from-[#F5F5F5] to*/}
        <div className='bg-[#262262] pt-20 relative'>
          <div className='w-11/12 md:w-6/12 m-auto text-center  rounded-2xl p-4 text-white' >
            <h1 className=' text-4xl md:text-5xl font-bold mb-8'>Our Tech Wizards</h1>

            <p>We're a software development company driven by a team of tech experts. With specialized skills and experience, we excel in various technology fields. Explore the languages and tools we're fluent in below.</p>
          </div>
          <Hex></Hex>
          <div className='absolute bottom-0 left-0 w-full'>
            <Wave></Wave>
          </div>
        </div>
        {/* Our Tech Wizards Section */}



      </div>

    </>
  )
}

export default App
