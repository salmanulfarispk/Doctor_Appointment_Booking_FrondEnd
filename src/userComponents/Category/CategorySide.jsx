import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
   
  } from "@/components/ui/command"
  
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
  

const CategorySide = () => {
    const [categorylist,setCategorylist]=useState([])
     const navigate=useNavigate()
    const categoryname=useParams()
    const{name}=categoryname;
    //  console.log(name)


      

const ListCategory=async()=>{
    try{
     const verifyToken={
      headers:{
        Authorization:`${localStorage.getItem("jwt")}`
      }
    };
  
    const response=await axios.get("http://localhost:3001/user/categorylist",verifyToken)
    // console.log("data",response.data.data)
    if (response.status === 200) {
      setCategorylist(response.data.data);
      // console.log(response.data.data)
    }
    }catch(err){
      console.error('Error fetching categories:', err);
    }
  }
  
   useEffect(()=>{
    ListCategory();
   },[])

  return (
    <div className='h-screen mt-5 flex flex-col m-3 '>
  <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className='overflow-visible'>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
     {categorylist && categorylist.map((item,index)=>(

     <CommandItem key={index}> 
        <li onClick={()=>{
            navigate(`category/${item.categoryname}`)
        }}
        className={`p-2 flex gap-2 text-[13px] text-blue-600 items-center rounded-md w-full
                 ${name==item.categoryname&&'bg-blue-100'}`}>
            <img src={item.image}
            alt='icon'
            width={25}
            height={25}/>
         <label>{item.categoryname}</label>
        </li>
    
   </CommandItem>
     ))}
      
     
    </CommandGroup>
  </CommandList>
</Command>



    </div>
    
  )
}

export default CategorySide