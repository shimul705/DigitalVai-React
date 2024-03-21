import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Code from './components/Code'
import Hex from './components/Hex'

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

        <div className='bg-[#F5F5F5]'>
          <Hex></Hex>
        </div>



      </div>

    </>
  )
}

export default App
