import React from 'react'
import Header from './Header'
import Hero from './Hero'
import CategorySearch from './CategorySearch'
import Register from './Register'
import Sidebar from '@/page/Sidebar'

const Home = () => {
  return (
    <div>
    
    <div className="md:px-20">
          <Header/>
        </div>

        <Hero/>
        <CategorySearch />

      
   




    </div>
  )
}

export default Home