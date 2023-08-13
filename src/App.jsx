import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import PriceList from './components/PriceLIsts/PriceList.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import BarCharts from './components/Dashboard/BarCharts.jsx'
import PhoneBar from './components/PhoneBar/PhoneBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-cyan-100'>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <BarCharts></BarCharts>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
