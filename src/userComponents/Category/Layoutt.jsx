import React from 'react'
import CategorySide from './CategorySide'
import Header from '../Header'
import Footer from '../Footer'
import CategoryDetails from './CategoryDetails'


const Layoutt = () => {
  return (
<>
  <Header/>
<div className='flex flex-wrap'>
  <div className='md:w-1/4 '>
    <CategorySide/>
  </div>

  <div className='md:w-3/4'>
    <CategoryDetails/>
       </div>

</div>

<Footer/>
</>

  )
}

export default Layoutt