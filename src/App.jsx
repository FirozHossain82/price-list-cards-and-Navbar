import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import PriceList from './components/PriceLIsts/PriceList.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-cyan-100'>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
