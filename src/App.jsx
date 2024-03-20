import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      </div>

    </>
  )
}

export default App
