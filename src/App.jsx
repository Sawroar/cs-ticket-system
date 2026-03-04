import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/components/Navbar/Navbar'
import Status from './components/Status/Status'
import Footer from './components/Footer/Footer'
import CustomerTicket from './components/CustomerTickets/CustomerTickets'
function App() {
 const customerTicketHandler=async()=>{
  const res= await fetch('/CustomerTickets.json')
  return res.json()
 }
 const customerTickets=  customerTicketHandler()

  return (
    <>
<div className='max-w-300 mx-auto'>
  <Navbar></Navbar>
  <Status></Status>
<Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}>  <CustomerTicket customerTickets={customerTickets}></CustomerTicket></Suspense>
  <Footer></Footer>
</div>
    </>
  )
}

export default App
