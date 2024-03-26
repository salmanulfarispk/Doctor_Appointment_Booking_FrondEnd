import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { CircleUserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'


const Header = () => {
    const navigate=useNavigate()
    const [Loggin,setLoggin]=useState(false)
    const [username,setUsername]=useState([])

    useEffect(()=>{
        const UserName=localStorage.getItem("username")
        if(UserName){
            setLoggin(true)
            setUsername(UserName)
        }else{
            setLoggin(false)
        }
    },[setLoggin,setUsername])


    const logout=()=>{
        localStorage.removeItem("username")
        setUsername('')
        localStorage.removeItem("jwt")
        localStorage.removeItem("userEmail")
        localStorage.removeItem("userId")
        setLoggin(!Loggin)
    }

  
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
    
   <img src='/logo.svg' alt='logo'className='transition-transform transform hover:scale-110' width={180} height={80} onClick={()=>{
       navigate("/") 
   }}/>

<ul className='md:flex gap-8 hidden'>

{menu.map((item,index)=>(
   
<li key={item.id} className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
<Link to={item.path}>{item.name}</Link>
</li>

))}


</ul>

     </div>

    {!Loggin ?
    <Button onClick={() => navigate("/login")}>Get Started</Button> 
    
    :

    <Popover>
  <PopoverTrigger>
  <CircleUserRound  className='text-gray-700' width={35} height={35} />
  </PopoverTrigger>
  <PopoverContent className='w-44'>
    <ul className='flex flex-col gap-1 font-mono'>
      <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>My Booking</li>
      <li onClick={logout} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>Logout</li>

    </ul>

  </PopoverContent>
</Popover>

       
   
   
}
    </div>
  )
}

export default Header