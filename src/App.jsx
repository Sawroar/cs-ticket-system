import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/components/Navbar/Navbar'
import Status from './components/Status/Status'
import Footer from './components/Footer/Footer'
function App() {
 
  return (
    <>
<div className='max-w-[1200px] mx-auto'>
  <Navbar></Navbar>
  <Status></Status>
  <Footer></Footer>
</div>
    </>
  )
}

export default App
