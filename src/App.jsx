import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <div className='main-section'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
