import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Header/Navbar'

function App() {

  return (
    <div className='main-section'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
