import React from 'react'
import CategorySide from './CategorySide'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'


const Layoutt = () => {
  return (
    <div>
        <Header/>
    <div className='grid grid-cols-4'>
        
     <span className='hidden md:block'><CategorySide/></span>



     
  
  <div className='col-span-5 md:col-span-3'>

    <Outlet/>
  </div>

    </div>

    <Footer/>
    </div>
  )
}

export default Layoutt