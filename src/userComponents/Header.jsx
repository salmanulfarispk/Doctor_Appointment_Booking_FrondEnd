import { Button } from '@/components/ui/button'

import React from 'react'
import { Link, useNavigate} from 'react-router-dom'


const Header = () => {
    const navigate=useNavigate()
  
    const menu = [
        {
            id: 1,
            name: "Home",
            path: "/"

        },
        {
            id: 2,
            name: "Explore",
            path: "/explore"

        },
        {
            id: 3,
            name: "Contact Us",
            path: "/contact"

        }


    ]


  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
     <div className='flex  items-center gap-10'>
    
   <img src='/logo.svg' alt='logo' width={180} height={80}/>

<ul className='md:flex gap-8 hidden'>

{menu.map((item,index)=>(
   
<li key={item.id} className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
<Link to={item.path}>{item.name}</Link>
</li>

))}


</ul>

     </div>

    <Button onClick={() => navigate("/login")}>Get Started</Button> 
   

    </div>
  )
}

export default Header