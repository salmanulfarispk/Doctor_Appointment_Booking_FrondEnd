import { SIDEBAR_LINKS } from '@/lib/Consts/Navigation';
import classNames from 'classnames';
import { LogOut } from 'lucide-react';
import React from 'react'
import { FcWorkflow } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';




const linkclasses='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


export default function Sidebar() {
  const navigate=useNavigate()
  return (
    
    <div className='bg-neutral-900 w-60  p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
        <FcWorkflow fontSize={34}/>
        <span className='text-gray-600 text-3xl font-bold hover:text-blue-400 '>Admin</span>

        </div>

      <div className='flex-1 py-3 flex flex-col gap-0.5'>

     {SIDEBAR_LINKS.map((item)=>(
         
        <SidebarLinks key={item.key}  item={item} />

     ))}



      </div>

      <div className="flex items-center text-red-700 hover:text-red-500 hover:cursor-pointer" onClick={()=>{
       localStorage.removeItem("role")
       localStorage.removeItem("AdminJWT")
        navigate('/login')
  }}>
  <span className="text-xl ms-2" ><LogOut/></span> SignOut
</div>


    </div>
    
  )
}


function SidebarLinks({item}){
    return (

   <Link to={item.path} className={classNames('text-white' ,linkclasses)}>
   
  <span className='text-xl'>{item.icon}</span>
   {item.label}

   </Link>



 )
}